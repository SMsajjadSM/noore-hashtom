import { PhoneIcon, SalamIcon } from "./icons";
import { PHONES, SALAM_URL, SALAM_HANDLE } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-20" style={{ background: "var(--bg-soft)" }}>
      <div className="container-px mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-3xl md:text-4xl mb-5">سفارش با یک تماس</h2>
          <p className="leading-8 mb-8" style={{ color: "var(--text-muted)" }}>
            همه محصولات به‌صورت تلفنی سفارش‌گیری می‌شوند. کارشناسان ما موجودی،
            رنگ و زمان ارسال را برایتان توضیح می‌دهند.
          </p>
          <div className="flex flex-col gap-4">
            {PHONES.map((phone) => (
              <a key={phone.id} href={`tel:${phone.tel}`} className="card p-5 flex items-center gap-4">
                <span className="icon-tile w-12 h-12 flex items-center justify-center">
                  <PhoneIcon size={20} />
                </span>
                <span>
                  <span className="block text-sm mb-1" style={{ color: "var(--text-muted)" }}>
                    {phone.label}
                  </span>
                  <span className="font-display text-xl num">{phone.display}</span>
                </span>
              </a>
            ))}
            <a
              href={SALAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center gap-4"
            >
              <span className="icon-tile w-12 h-12 flex items-center justify-center">
                <SalamIcon />
              </span>
              <span>
                <span className="block text-sm mb-1" style={{ color: "var(--text-muted)" }}>
                  فروشگاه ما در باسلام
                </span>
                <span className="font-display text-xl">{SALAM_HANDLE}</span>
              </span>
            </a>
          </div>
        </div>
        <div className="card p-8 flex flex-col justify-center">
          <p className="font-display text-2xl mb-4">ساعات پاسخگویی</p>
          <p> هر روز هفته هر ۲۴ ساعت</p>
          <div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
            <p className="text-sm leading-7" style={{ color: "var(--text-muted)" }}>
              خرید فقط با تماس تلفنی انجام می‌شود؛ هیچ پرداخت آنلاینی از شما
              درخواست نخواهد شد.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
