import ProductCard from "./ProductCard";
import { PRODUCTS } from "../data/products";

export default function Products({ onOpenOrder, onOpenDetails }) {
  return (
    <section id="products" className="py-20">
      <div className="container-px mx-auto max-w-6xl">
        <div className="mb-12 max-w-xl">
          <h2 className="font-display text-3xl md:text-4xl mb-4">محصولات</h2>
          <p style={{ color: "var(--text-muted)" }}>
            برای خرید هر کدام از این محصولات، روی «سفارش» بزنید و با شماره‌ای که
            نمایش داده می‌شود تماس بگیرید.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} onOpenOrder={onOpenOrder} onOpenDetails={onOpenDetails} />
          ))}
        </div>
      </div>
    </section>
  );
}
