const rawApiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";
export const API_BASE_URL = rawApiUrl.replace(/\/+$/, "");

export async function apiFetch(path: string, init?: RequestInit) {
  return fetch(`${API_BASE_URL}${path}`, init);
}
