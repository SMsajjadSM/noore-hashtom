import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { ARTICLES } from "../data/articles";
import ProductImage from "../components/ProductImage";
import { ArrowIcon } from "../components/icons";

export function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("fa-IR", { year: "numeric", month: "long", day: "numeric" });
  } catch (e) {
    return iso;
  }
}

export function ArticleCard({ a }) {
  return (
    <Link to={`/articles/${a.slug}`} className="card article-card flex flex-col h-full">
      <div className="article-media">
        <ProductImage src={a.image} alt={a.title} icon="frame" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          <span className="num">{formatDate(a.date)}</span>
          <span className="mx-2">•</span>
          <span className="num">{a.readTime.toLocaleString("fa-IR")}</span> دقیقه مطالعه
        </p>
        <h2 className="font-display text-2xl leading-9 mb-3">{a.title}</h2>
        <p className="text-sm leading-7 mb-5 flex-1" style={{ color: "var(--text-muted)" }}>
          {a.excerpt}
        </p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--primary-strong)" }}>
          ادامه مطلب <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export default function ArticlesPage() {
  usePageMeta("مقالات حرز", "مقالات و راهنماهای نور هشتم درباره‌ی حرز امام جواد (ع)، حرز ابی دجانه، آداب کتابت و نگهداری از حرز.");

  return (
    <section className="py-16 md:py-20">
      <div className="container-px mx-auto max-w-6xl">
        <nav aria-label="مسیر صفحه" className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          <Link to="/" className="hover-primary">خانه</Link>
          <span className="mx-2">/</span>
          <span>مقالات</span>
        </nav>
        <div className="mb-12 max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl mb-4">مقالات</h1>
          <p className="leading-8" style={{ color: "var(--text-muted)" }}>
            آشنایی با حرزها، پیشینه، آداب کتابت و نکات نگهداری؛ همه‌چیز درباره‌ی آنچه
            همراه خود قرار می‌دهید.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <ArticleCard key={a.slug} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
