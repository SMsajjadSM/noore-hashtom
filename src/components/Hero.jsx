import StarPattern from "./StarPattern";
import { PhoneIcon } from "./icons";

export default function Hero({ onOpenModal }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <StarPattern className="hero-pattern absolute -left-24 -top-24 w-[420px] h-[420px] rotate-slow" />
      <div className="container-px mx-auto max-w-6xl pt-16 pb-24 md:pt-24 md:pb-32 relative rise-in">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--primary-strong)" }}>
          زیورهای حرز، دست‌ساز و اصیل
        </p>
        <h1
          className="font-display text-4xl md:text-5xl leading-[1.35] max-w-4xl"
          style={{ color: "var(--text)" }}
        >
          آرامش و امنیت، هدیه حرز اصیل امام جواد (ع)
        </h1>
        <p className="mt-6 max-w-xl text-base md:text-lg leading-8" style={{ color: "var(--text-muted)" }}>
          «در فروشگاه “نور هشتم”، باور ما بر این است که حرز امام جواد (ع) تنها یک
          محصول نیست؛ بلکه دعوتی است برای آرامش و گشایش در زندگی. ما در این
          مجموعه، بیش از هر چیز بر “آداب کتابت” و “شرایط معنویِ” نگارش این حرز
          شریف تاکید داریم. تمامی مراحل با رعایت دقیق آداب و دستورات شرعی انجام
          شده تا آنچه به دست شما می‌رسد، با نهایتِ دقت و خلوص نیت تهیه شده باشد.
          از آنجا که معتقدیم این مسیر باید با پیوند قلبی و مشاوره آغاز شود، ثبت
          سفارش آنلاین نداریم. ما ترجیح می‌دهیم قبل از هر چیز، با شما صحبت کنیم
          تا بتوانیم محصولی در خورِ شأنِ شما و با رعایت کامل آداب، برایتان کنار
          بگذاریم.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#products" className="btn-primary">
            مشاهده محصولات
          </a>
          <button onClick={() => onOpenModal(null)} className="btn-ghost">
            <PhoneIcon size={16} /> تماس برای سفارش
          </button>
        </div>
      </div>
    </section>
  );
}
