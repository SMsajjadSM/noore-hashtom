import { useEffect } from "react";
import { CloseIcon } from "./icons";

export default function DetailsModal({ product, onClose }) {
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
            <p className="font-display text-2xl mb-1">توضیحات</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {product.name}
            </p>
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

        <p className="text-sm leading-8 whitespace-pre-line" style={{ color: "var(--text-muted)" }}>
          {product.details}
        </p>
      </div>
    </div>
  );
}
