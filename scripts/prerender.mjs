// بعد از `vite build` اجرا می‌شود.
// برای هر صفحه (مقالات و هر مقاله) یک index.html جدا می‌سازد تا:
//  1) رفرش یا باز کردن مستقیم لینک روی گیت‌هاب‌پیجز ۴۰۴ ندهد،
//  2) هر صفحه عنوان و توضیحات سئوی خودش را داشته باشد،
// و فایل‌های 404.html، sitemap.xml و robots.txt را هم می‌سازد.
import fs from "node:fs";
import path from "node:path";
import { loadModules } from "./load-data.mjs";

const mods = await loadModules(["/src/data/articles.js", "/src/data/site.js"]);
const { ARTICLES } = mods["/src/data/articles.js"];
const { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } = mods["/src/data/site.js"];

const dist = path.resolve("dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function render({ title, description, route }) {
  const url = SITE_URL + route;
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta\s+name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`);
  const extra = [
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="fa_IR" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
  ].join("\n    ");
  return html.replace("</head>", `    ${extra}\n  </head>`);
}

function write(file, html) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

const pages = [
  { route: "/", title: `${SITE_NAME} | زیورهای حرز و دعا`, description: DEFAULT_DESCRIPTION, out: "index.html" },
  {
    route: "/articles",
    title: `مقالات حرز | ${SITE_NAME}`,
    description: "مقالات و راهنماهای نور هشتم درباره‌ی حرز امام جواد (ع)، حرز ابی دجانه، آداب کتابت و نگهداری از حرز.",
    out: "articles/index.html",
  },
  ...ARTICLES.map((a) => ({
    route: `/articles/${a.slug}`,
    title: `${a.title} | ${SITE_NAME}`,
    description: a.excerpt,
    out: `articles/${a.slug}/index.html`,
  })),
];

for (const p of pages) write(path.join(dist, p.out), render(p));

// صفحه‌ی ۴۰۴ گیت‌هاب‌پیجز: همان اپ را بالا می‌آورد و خودش NotFound نشان می‌دهد
write(path.join(dist, "404.html"), template);

const urls = pages.map((p) => `  <url><loc>${SITE_URL}${p.route === "/" ? "/" : p.route}</loc></url>`).join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`prerender: ${pages.length} pages + 404.html + sitemap.xml + robots.txt`);
