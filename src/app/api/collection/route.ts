import { connection, NextResponse } from "next/server";
import { applyChanges, kvConfigured, loadAll, pinOk, pinRequired } from "@/lib/server-store";
import { CATALOG } from "@/data/cards";

const KNOWN = new Set(CATALOG.map((c) => c.id));

export async function GET() {
  await connection(); // always render at request time
  if (!kvConfigured) return NextResponse.json({ configured: false, pinRequired });
  try {
    return NextResponse.json({ configured: true, pinRequired, collection: await loadAll() });
  } catch {
    return NextResponse.json({ configured: true, pinRequired, error: "read_failed" }, { status: 502 });
  }
}

/** Body: { changes: { [cardId]: CardRecord | null } } — only the cards that changed. */
export async function PATCH(req: Request) {
  if (!kvConfigured) return NextResponse.json({ error: "not_configured" }, { status: 501 });
  if (!pinOk(req.headers.get("x-pin"))) return NextResponse.json({ error: "bad_pin" }, { status: 401 });
  try {
    const { changes } = await req.json();
    const entries = Object.entries(changes ?? {});
    if (!entries.length || entries.length > 200) throw new Error();
    for (const [id, rec] of entries) {
      if (!KNOWN.has(id)) throw new Error();
      if (rec !== null && (typeof rec !== "object" || Array.isArray(rec) || JSON.stringify(rec).length > 300_000)) throw new Error();
    }
    await applyChanges(changes);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "save_failed" }, { status: 400 });
  }
}
