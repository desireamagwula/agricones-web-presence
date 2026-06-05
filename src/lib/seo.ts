const RAW_SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined) || "https://agricones.com";

export const SITE_URL = RAW_SITE_URL.replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
