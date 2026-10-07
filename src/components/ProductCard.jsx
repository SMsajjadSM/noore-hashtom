import ProductImage from "./ProductImage";
import { PhoneIcon, InfoIcon } from "./icons";

function toman(n) {
  return n.toLocaleString("fa-IR") + " تومان";
}

export default function ProductCard({ p, onOpenOrder, onOpenDetails }) {
  const hasDetails = !!(p.details && p.details.trim());

  return (
    <div className="card flex flex-col h-full">
      <div className="product-media">
        <ProductImage src={p.image} alt={p.name} icon={p.icon} />
        {p.tag && (
          <span
            className="absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full"
            style={{
              background: "var(--surface)",
              color: "var(--gold)",
              border: "1px solid var(--border)",
            }}
          >
            {p.tag}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-semibold text-lg mb-2 leading-8">{p.name}</h3>
        <p className="text-sm leading-7 mb-5 flex-1" style={{ color: "var(--text-muted)" }}>
          {p.desc}
        </p>
        <div className="pt-4 flex flex-col gap-3" style={{ borderTop: "1px solid var(--border)" }}>
          <span className="font-display text-xl num" style={{ color: "var(--primary-strong)" }}>
            {toman(p.price)}
          </span>
          <div className={`grid gap-2 ${hasDetails ? "grid-cols-2" : "grid-cols-1"}`}>
            {hasDetails && (
              <button
                onClick={() => onOpenDetails(p)}
                className="btn-ghost justify-center py-2 px-2.5 whitespace-nowrap"
                style={{ fontSize: "0.82rem" }}
              >
                <InfoIcon size={13} /> توضیحات
              </button>
            )}
            <button
              onClick={() => onOpenOrder(p)}
              className="btn-ghost justify-center py-2 px-2.5 whitespace-nowrap"
              style={{ fontSize: "0.82rem" }}
            >
              <PhoneIcon size={13} /> سفارش
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
