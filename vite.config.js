import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ مهم برای گیت‌هاب‌پیجز:
// - اگر آدرس سایتت شبیه https://USERNAME.github.io/REPO-NAME/ است،
//   base باید "/REPO-NAME/" باشد (با اسلش اول و آخر).
// - اگر دامنه‌ی اختصاصی داری یا آدرس USERNAME.github.io است، "/" بگذار.

export default defineConfig({
  base: '/noore-hashtom/', 
  plugins: [react()],
});
