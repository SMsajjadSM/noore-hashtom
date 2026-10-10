import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Header from "./Header";
import Footer from "./Footer";
import CallFab from "./CallFab";
import ContactModal from "./ContactModal";
import DetailsModal from "./DetailsModal";
import LazyMount from "./LazyMount";

// بعد از هر تغییر صفحه: بالای صفحه برو؛ و اگر آدرس #بخش داشت، به همان بخش برو.
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer;
    const tick = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else if (tries++ < 20) timer = setTimeout(tick, 50);
    };
    tick();
    return () => clearTimeout(timer);
  }, [pathname, hash, key]);
  return null;
}

export default function Layout() {
  const [theme, toggle] = useTheme();
  const [modalState, setModalState] = useState(null);
  // modalState: null | { type: "order", product } | { type: "details", product }

  const openOrder = (product) => setModalState({ type: "order", product: product || null });
  const openDetails = (product) => setModalState({ type: "details", product });
  const closeModal = () => setModalState(null);

  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) {
      loader.classList.add("hide");
      setTimeout(() => loader.remove(), 450);
    }
  }, []);

  return (
    <>
      <ScrollManager />
      <Header theme={theme} toggle={toggle} onOpenModal={openOrder} />
      <main>
        <Outlet context={{ openOrder, openDetails }} />
      </main>
      <LazyMount rootMargin="200px" minHeight={88}>
        <Footer />
      </LazyMount>
      <CallFab onOpenModal={openOrder} />
      {modalState && modalState.type === "order" && (
        <ContactModal product={modalState.product} onClose={closeModal} />
      )}
      {modalState && modalState.type === "details" && (
        <DetailsModal product={modalState.product} onClose={closeModal} />
      )}
    </>
  );
}
