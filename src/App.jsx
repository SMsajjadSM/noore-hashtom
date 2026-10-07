import { useEffect, useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Wholesale from "./components/Wholesale";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallFab from "./components/CallFab";
import ContactModal from "./components/ContactModal";
import DetailsModal from "./components/DetailsModal";
import LazyMount from "./components/LazyMount";

export default function App() {
  const [theme, toggle] = useTheme();
  const [modalState, setModalState] = useState(null);
  // modalState: null | { type: "order", product } | { type: "details", product }

  const openOrderModal = (product) =>
    setModalState({ type: "order", product: product || null });
  const openDetailsModal = (product) => setModalState({ type: "details", product });
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
      <Header theme={theme} toggle={toggle} onOpenModal={openOrderModal} />
      <main>
        <Hero onOpenModal={openOrderModal} />
        <About />
        <LazyMount rootMargin="400px" minHeight={640}>
          <Products onOpenOrder={openOrderModal} onOpenDetails={openDetailsModal} />
          <Wholesale onOpenModal={openOrderModal} />
        </LazyMount>
        <Contact />
      </main>
      <LazyMount rootMargin="200px" minHeight={88}>
        <Footer />
      </LazyMount>
      <CallFab onOpenModal={openOrderModal} />
      {modalState && modalState.type === "order" && (
        <ContactModal product={modalState.product} onClose={closeModal} />
      )}
      {modalState && modalState.type === "details" && (
        <DetailsModal product={modalState.product} onClose={closeModal} />
      )}
    </>
  );
}
