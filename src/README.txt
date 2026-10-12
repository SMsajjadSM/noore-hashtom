نصب بنر (۳ قدم):

1) پوشه‌ی src را روی پوشه‌ی src پروژه‌ات کپی کن (فقط فایل جدید اضافه می‌شود، چیزی پاک نمی‌شود):
   - src/components/HeroBanner.jsx
   - src/assets/banner/*.webp   (۴ عکس بهینه‌شده)

2) محتوای banner-styles.css را ته فایل src/index.css پیست کن.

3) در src/pages/HomePage.jsx دو تغییر بده:
   بالا:   import HeroBanner from "../components/HeroBanner";
   داخل return، قبل از <Hero ... />:   <HeroBanner />
