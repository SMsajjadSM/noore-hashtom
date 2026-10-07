export default function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: "1px solid var(--border)" }}>
      <div
        className="container-px mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
        style={{ color: "var(--text-muted)" }}
      >
        <span>© {new Date().getFullYear()} نور هشتم . تمامی حقوق محفوظ است.</span>
        <span>ساخته‌ شده توسط نور هشتم</span>
      </div>
    </footer>
  );
}
