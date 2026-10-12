import { Link } from "react-router-dom";
// import logo from "../assets/banner/banner-logo.webp";
import scroll from "../assets/banner/banner-scroll.webp";
import band from "../assets/banner/banner-band.webp";
import frame from "../assets/banner/banner-frame.webp";

// بنر بالای صفحه‌ی اصلی. رنگ‌هایش خودکار با تم روشن/تیره‌ی سایت عوض می‌شود
// (متغیرها در src/index.css بخش «بنر اول صفحه»).
export default function HeroBanner() {
  return (
    <section
      aria-label="حرز امام جواد (ع)"
      className="container-px mx-auto max-w-6xl  pt-5 md:pt-8"
    >
      <div className="hero-banner">
        <div className="hb-frame" aria-hidden="true" />

        <div className="hb-txt">
          {/* <img className="hb-logo" src={logo} alt="نور هشتم" width="298" height="320" /> */}
          <div className="hb-badge">دست‌نویس · قاب نقره‌ای · بند چرمی</div>
          <h2 className="hb-title">
            حرز <span>امام جواد</span> (ع)
          </h2>
          <p className="hb-desc">
            همراهی مطمئن در مسیر زندگی؛ حرز اصیل با خط دست‌نویس، همراه با قاب و
            بند چرمی.
          </p>
          {/* مستقیم می‌رود روی بخش محصولات تا قیمت‌ها را ببیند */}
          <Link to="/#products" className="hb-cta">
            سفارش حرز <span aria-hidden="true">←</span>
          </Link>
        </div>

        <div className="hb-vis" aria-hidden="true">
          <img className="hb-s" src={scroll} alt="" decoding="async" />
          <img className="hb-l" src={band} alt="" decoding="async" />
          <img className="hb-c" src={frame} alt="" decoding="async" />
        </div>
      </div>
    </section>
  );
}
