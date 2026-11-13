/** Tiny Upstash/Vercel-KV REST client (no dependency). One Redis hash: field = card id, value = card record JSON. */
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const HASH = "tiger-binder:cards";

export const kvConfigured = Boolean(URL_ && TOKEN);
/** Optional: set EDIT_PIN to restrict editing. Leave unset so anyone can edit. */
export const pinRequired = Boolean(process.env.EDIT_PIN);
export const pinOk = (pin: string | null) => !process.env.EDIT_PIN || pin === process.env.EDIT_PIN;

async function call(path: string, body: unknown) {
  const r = await fetch(`${URL_}${path}`, { method: "POST", headers: { Authorization: `Bearer ${TOKEN}` }, body: JSON.stringify(body), cache: "no-store" });
  if (!r.ok) throw new Error(`KV ${r.status}`);
  return r.json();
}

export async function loadAll(): Promise<Record<string, unknown>> {
  const { result } = (await call("", ["HGETALL", HASH])) as { result: string[] | null };
  const out: Record<string, unknown> = {};
  for (let i = 0; result && i < result.length; i += 2) {
    try { out[result[i]] = JSON.parse(result[i + 1]); } catch {}
  }
  return out;
}

/** changes: id -> record (set) or null (delete) */
export async function applyChanges(changes: Record<string, unknown | null>) {
  const cmds: unknown[][] = Object.entries(changes).map(([id, rec]) => (rec === null ? ["HDEL", HASH, id] : ["HSET", HASH, id, JSON.stringify(rec)]));
  if (cmds.length) await call("/pipeline", cmds);
}
