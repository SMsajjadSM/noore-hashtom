import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta("صفحه پیدا نشد", null);
  return (
    <section className="py-24">
      <div className="container-px mx-auto max-w-xl text-center">
        <p className="font-display text-7xl mb-4" style={{ color: "var(--primary-strong)" }}>۴۰۴</p>
        <h1 className="font-display text-3xl mb-4">صفحه‌ای که دنبالش بودی پیدا نشد</h1>
        <p className="mb-8" style={{ color: "var(--text-muted)" }}>
          ممکن است آدرس اشتباه باشد یا صفحه جابه‌جا شده باشد.
        </p>
        <Link to="/" className="btn-primary">بازگشت به صفحه‌ی اصلی</Link>
      </div>
    </section>
  );
}
