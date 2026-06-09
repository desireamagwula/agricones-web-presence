// Read canonical site origin from env, with production fallback.
const RAW_SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) || "https://agricones.com";

// Normalize by removing any trailing slash so URL joins are consistent.
export const SITE_URL = RAW_SITE_URL.replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  // Root/empty path should resolve to the site origin.
  if (!path || path === "/") return SITE_URL;
  // If already absolute (http/https), return as-is.
  if (/^https?:\/\//i.test(path)) return path;
  // Otherwise join the relative path to the normalized site origin.
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
