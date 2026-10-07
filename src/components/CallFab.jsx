import { PhoneIcon } from "./icons";

export default function CallFab({ onOpenModal }) {
  return (
    <button
      onClick={() => onOpenModal(null)}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center pulse-ring"
      style={{
        background: "var(--primary-strong)",
        color: "var(--on-primary)",
        boxShadow: "var(--shadow)",
      }}
      aria-label="تماس برای سفارش"
    >
      <PhoneIcon size={22} />
    </button>
  );
}
