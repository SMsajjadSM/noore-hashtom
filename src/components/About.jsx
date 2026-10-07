const POINTS = [
  {
    title: "پناهگاه امنیت و آرامش",
    text: "دفع بلایا، بیماری‌ها و در امان ماندن از خطرات روزمره. حرز امام جواد (ع) همچون سپری در برابر چشم‌زخم و آسیب‌های جسمی و روحی است.",
  },
  {
    title: " گشایش درهای رزق و بخت",
    text: "همراه داشتن حرز، برکاتی فراتر از یک نماد دارد: از ایجاد امنیت پایدار در زندگی گرفته تا گشایش در رزق و روزی و بهبود روابط خانوادگی.",
  },
  {
    title: "تحکیم روابط و صمیمیت",
    text: " ایجاد آرامش در فضای خانه، بهبود روابط عاطفی و افزایش صمیمیت میان زوجین؛ راهکاری برای رفع کدورت‌ها و دوری از تنش‌های خانوادگی.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20" style={{ background: "var(--bg-soft)" }}>
      <div className="container-px mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl mb-5">
            {" "}
            چرا حرز امام جواد (ع) همراهِ بسیاری از خانواده‌هاست؟
          </h2>
          <p className="leading-8" style={{ color: "var(--text-muted)" }}>
            «حرز شریف امام جواد (ع) تنها یک ذکر یا نوشته نیست؛ بلکه گنجینه‌ای
            است که از دیرباز برای حفاظت از جان و مال توصیه شده است. تجربیاتِ
            سالیانِ متمادی نشان می‌دهد که همراه داشتن این حرز، برکاتی فراتر از
            یک نماد دارد: از دفع خطرات، چشم‌زخم و بیماری‌ها گرفته تا ایجاد
            امنیتِ پایدار در زندگی. بسیاری از مراجعین ما برای برکت در رزق و
            روزی، گشایش بخت و همچنین برای بهبود روابط خانوادگی و افزایش
            صمیمیت میان زوجین، به این حرز متوسل می‌شوند. آرامشی که با همراه
            داشتن این حرز به قلب‌ها می‌نشیند، گوهری است که “نور هشتم” مفتخر
            است اصیل‌ترین نسخه آن را با رعایت کامل آداب، به شما تقدیم کند.»
          </p>
        </div>
        <div className="grid sm:grid-cols-1 gap-4">
          {POINTS.map((p, i) => (
            <div key={i} className="card p-5 flex items-start gap-4">
              <div className="icon-tile w-11 h-11 flex items-center justify-center shrink-0 font-display text-lg num">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold mb-1">{p.title}</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
