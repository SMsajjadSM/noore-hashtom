import { PhoneIcon } from "./icons";

export default function Wholesale({ onOpenModal }) {
  return (
    <section id="wholesale" className="py-6">
      <div className="container-px mx-auto max-w-6xl">
        <div
          className="card p-7 md:p-9 grid md:grid-cols-[1fr_auto] gap-6 items-center"
          style={{ background: "var(--primary-soft)", borderColor: "var(--primary-strong)" }}
        >
          <div>
            <h2 className="font-display text-2xl md:text-3xl mb-3">
              همکاری با فروشندگان و خرید عمده
            </h2>
            <p className="leading-7" style={{ color: "var(--text-muted)" }}>
              اگر فروشنده هستید یا قصد خرید با تعداد بالا دارید، قیمت‌ها با آنچه
              در سایت نمایش داده می‌شود متفاوت است. برای دریافت قیمت عمده و
              شرایط همکاری، با یکی از شماره‌های زیر تماس بگیرید.
            </p>
          </div>
          <button
            onClick={() =>
              onOpenModal({ wholesale: true, name: "خرید عمده و همکاری فروشندگان" })
            }
            className="btn-primary whitespace-nowrap"
          >
            <PhoneIcon size={16} /> تماس برای همکاری
          </button>
        </div>
      </div>
    </section>
  );
}
