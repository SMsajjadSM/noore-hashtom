// آدرس عکس را با base سایت (مثلاً /REPO-NAME/) هماهنگ می‌کند.
//  - مسیر متنی مثل "/photo/x.jpg" (فایل داخل public/): پیشوند base اضافه می‌شود.
//  - عکسی که با import گرفته شده: Vite خودش base را اضافه کرده، دست نمی‌زنیم.
//  - لینک کامل (http / data:): دست‌نخورده.
export function asset(p) {
  if (!p) return p;
  if (/^(https?:|data:)/.test(p)) return p;
  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // "" یا "/REPO-NAME"
  if (base && (p === base || p.startsWith(base + "/"))) return p; // قبلاً پیشوند دارد
  return base + (p.startsWith("/") ? p : "/" + p);
}
