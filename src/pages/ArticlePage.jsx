import { Link, useParams, useOutletContext } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { ARTICLES, getArticle } from "../data/articles";
import { formatDate, ArticleCard } from "./ArticlesPage";
import NotFoundPage from "./NotFoundPage";
import { PhoneIcon } from "../components/icons";

function Block({ b }) {
  switch (b.type) {
    case "h2":
      return <h2>{b.text}</h2>;
    case "ul":
      return (
        <ul>
          {b.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{b.text}</blockquote>;
    default:
      return <p>{b.text}</p>;
  }
}

export default function ArticlePage() {
  const { slug } = useParams();
  const { openOrder } = useOutletContext();
  const article = getArticle(slug);
  usePageMeta(article ? article.title : null, article ? article.excerpt : null);

  if (!article) return <NotFoundPage />;

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="py-14 md:py-20">
      <div className="container-px mx-auto max-w-3xl">
        <nav aria-label="مسیر صفحه" className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
          <Link to="/" className="hover-primary">خانه</Link>
          <span className="mx-2">/</span>
          <Link to="/articles" className="hover-primary">مقالات</Link>
        </nav>

        <header className="mb-10">
          <h1 className="font-display text-3xl md:text-5xl leading-[1.5] mb-5">{article.title}</h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            <span className="num">{formatDate(article.date)}</span>
            <span className="mx-2">•</span>
            <span className="num">{article.readTime.toLocaleString("fa-IR")}</span> دقیقه مطالعه
          </p>
        </header>

        <div className="prose-article">
          {article.content.map((b, i) => (
            <Block key={i} b={b} />
          ))}
        </div>

        <div className="card p-7 mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-5" style={{ background: "var(--primary-soft)", borderColor: "var(--primary-strong)" }}>
          <div>
            <p className="font-display text-2xl mb-1">سفارش یا مشاوره</p>
            <p className="text-sm leading-7" style={{ color: "var(--text-muted)" }}>
              برای سفارش یا پرسش درباره‌ی حرز، با ما تماس بگیرید.
            </p>
          </div>
          <button onClick={() => openOrder(null)} className="btn-primary whitespace-nowrap justify-center">
            <PhoneIcon size={16} /> تماس با ما
          </button>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl mb-6">مقالات مرتبط</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.slug} a={a} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
