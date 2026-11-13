import { NextResponse } from "next/server";
import { pinOk } from "@/lib/server-store";

export async function POST(req: Request) {
  const { pin } = (await req.json().catch(() => ({}))) as { pin?: string };
  return pinOk(pin ?? null) ? NextResponse.json({ ok: true }) : NextResponse.json({ ok: false }, { status: 401 });
}
