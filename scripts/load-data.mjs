// فایل‌های داده (articles.js، products.js، ...) ممکن است عکس را با import بگیرند:
//   import postimg from "../../public/photo/x.jpg"
// نود این را نمی‌فهمد، ولی Vite می‌فهمد. پس اسکریپت‌های build داده‌ها را از طریق
// Vite لود می‌کنند (عکس‌های import شده به آدرس متنی تبدیل می‌شوند).
import { createServer } from "vite";

export async function loadModules(paths) {
  const server = await createServer({
    configFile: false,
    logLevel: "silent",
    appType: "custom",
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  try {
    const out = {};
    for (const p of paths) out[p] = await server.ssrLoadModule(p);
    return out;
  } finally {
    await server.close();
  }
}
