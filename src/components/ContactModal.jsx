import { useEffect, useState } from "react";
import { PHONES } from "../data/contact";
import { PhoneIcon, CopyIcon, CheckIcon, CloseIcon } from "./icons";

export default function ContactModal({ product, onClose }) {
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const copy = async (phone) => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(phone.copy);
      ok = true;
    } catch (e) {
      try {
        const ta = document.createElement("textarea");
        ta.value = phone.copy;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        ok = true;
      } catch (e2) {
        ok = false;
      }
    }
    if (ok) {
      setCopiedId(phone.id);
      setTimeout(() => setCopiedId((c) => (c === phone.id ? null : c)), 2000);
    }
  };

  const isWholesale = !!(product && product.wholesale);

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box" role="dialog" aria-modal="true">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-display text-2xl mb-1">
              {isWholesale ? "خرید عمده و همکاری" : product ? "ثبت سفارش" : "تماس با ما"}
            </p>
            {product && !isWholesale && (
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {product.name}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="بستن"
            className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
            style={{ border: "1px solid var(--border)", color: "var(--text)" }}
          >
            <CloseIcon />
          </button>
        </div>

        <p className="text-sm leading-7 mb-5" style={{ color: "var(--text-muted)" }}>
          {isWholesale
            ? "قیمت‌های عمده و همکاری با فروشندگان، متفاوت از قیمت‌هایی است که در سایت نمایش داده می‌شود. با یکی از شماره‌های زیر تماس بگیرید تا شرایط و تعرفه همکاری را دریافت کنید."
            : product
              ? "برای هماهنگی موجودی و ارسال، با یکی از شماره‌های زیر تماس بگیرید و نام همین محصول را اعلام کنید؛ یا شماره را کپی کنید و بعداً تماس بگیرید."
              : "همکاران ما آماده پاسخگویی هستند. با یکی از شماره‌های زیر تماس بگیرید یا آن را کپی کنید."}
        </p>

        <div className="flex flex-col gap-3">
          {PHONES.map((phone) => (
            <div key={phone.id} className="phone-row">
              <div>
                <span className="block text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>
                  {phone.label}
                </span>
                <span className="font-display text-lg num">{phone.display}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => copy(phone)}
                  className={`copy-btn justify-center ${copiedId === phone.id ? "copied" : ""}`}
                >
                  {copiedId === phone.id ? <CheckIcon /> : <CopyIcon />}
                  {copiedId === phone.id ? "کپی شد" : "کپی"}
                </button>
                <a href={`tel:${phone.tel}`} className="btn-primary text-sm py-2 px-3.5 justify-center">
                  <PhoneIcon size={14} /> تماس
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
