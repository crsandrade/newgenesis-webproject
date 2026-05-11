import { NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

import { cashPackages } from "@/data/cash-packages";

export async function POST(request: Request) {
    const body = await request.json();

    const { username, email, packageId } = body;

    if (!username || !email || !packageId) {
        return NextResponse.json(
            { success: false, message: "Dados incompletos." },
            { status: 400 }
        );
    }

    const selectedPackage = cashPackages.find((item) => item.id === packageId);

    if (!selectedPackage) {
        return NextResponse.json(
            { success: false, message: "Pacote inválido." },
            { status: 404 }
        );
    }

    const orderId = `NG-${Date.now()}`;

    const content = `NEW_GENESIS_CASH_ORDER
ORDER_ID=${orderId}
USERNAME=${username}
EMAIL=${email}
PACKAGE_ID=${selectedPackage.id}
PACKAGE_NAME=${selectedPackage.name}
CASH_AMOUNT=${selectedPackage.cashAmount}
BONUS=${selectedPackage.bonus}
TOTAL_CASH=${selectedPackage.cashAmount + selectedPackage.bonus}
PRICE=${selectedPackage.price}
STATUS=TEST
CREATED_AT=${new Date().toISOString()}
`;

    const folderPath = path.join(process.cwd(), "storage", "cash-orders");
    await mkdir(folderPath, { recursive: true });

    const filePath = path.join(folderPath, `${orderId}.txt`);
    await writeFile(filePath, content, "utf-8");

    return NextResponse.json({
        success: true,
        message: "Pedido de cash criado com sucesso.",
        orderId,
    });
}