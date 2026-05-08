import { NextResponse } from "next/server";

import { rankings } from "@/data/rankings";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: rankings,
  });
}