// قبل از build اجرا می‌شود و بررسی می‌کند عکس‌هایی که در کد نوشته‌ای واقعاً
// داخل public/ هستند. دلیل اصلی «روی ویندوز/VS Code کار می‌کند ولی روی گیت‌هاب
// خراب است» این‌هاست: تفاوت حروف بزرگ/کوچک در اسم فایل، اسم فارسی، و
// فایلی که اصلاً داخل public/ نیست.
import fs from "node:fs";
import path from "node:path";
import { ARTICLES } from "../src/data/articles.js";
import { LOGO_SRC } from "../src/data/contact.js";

// اگر در products.js عکس‌ها را با import گرفته‌ای (import x from "...jpg")، نود
// نمی‌تواند آن فایل را بخواند. در آن حالت خود Vite موقع build اگر فایلی نباشد
// خطا می‌دهد، پس این بررسی فقط برای مسیرهای متنی انجام می‌شود.
let PRODUCTS = [];
try {
  ({ PRODUCTS } = await import("../src/data/products.js"));
} catch (e) {
  console.log("check-images: products.js عکس‌ها را با import می‌گیرد؛ Vite خودش وجود فایل‌ها را موقع build چک می‌کند.");
}

const publicDir = path.resolve("public");
const refs = [
  ["لوگو", LOGO_SRC],
  ...PRODUCTS.map((p) => [`محصول «${p.name.trim()}»`, p.image]),
  ...ARTICLES.map((a) => [`مقاله «${a.slug}»`, a.image]),
].filter(([, src]) => typeof src === "string" && src && !/^(https?:|data:)/.test(src));

let problems = 0;
const warn = (msg) => {
  problems++;
  console.warn("⚠️  " + msg);
};

for (const [what, src] of refs) {
  const rel = decodeURIComponent(src).replace(/^\/+/, "");
  let dir = publicDir;
  let ok = true;
  for (const seg of rel.split("/")) {
    const names = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
    const exact = names.find((n) => n.normalize("NFC") === seg.normalize("NFC"));
    if (exact) {
      dir = path.join(dir, exact);
      continue;
    }
    const loose = names.find((n) => n.toLowerCase() === seg.toLowerCase());
    if (loose) warn(`${what}: حروف بزرگ/کوچک نمی‌خواند. در کد «${seg}» نوشته‌ای ولی فایل «${loose}» است (گیت‌هاب به این حساس است).`);
    else warn(`${what}: فایل پیدا نشد → public/${rel}`);
    ok = false;
    break;
  }
  if (ok && /[^\x00-\x7F]/.test(rel)) {
    warn(`${what}: اسم فایل فارسی/غیرانگلیسی است (public/${rel}). روی گیت‌هاب‌پیجز بهتر است اسم انگلیسی و کوچک بدهی.`);
  }
  if (ok && /\s/.test(rel)) warn(`${what}: اسم فایل فاصله دارد (${rel}). به‌جایش خط تیره بگذار.`);
}

console.log(problems ? `check-images: ${problems} مورد نیاز به بررسی دارد.` : `check-images: همه‌ی ${refs.length} عکس سالم‌اند.`);
