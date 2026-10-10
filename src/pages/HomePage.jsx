import { useOutletContext } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Wholesale from "../components/Wholesale";
import Contact from "../components/Contact";
import LazyMount from "../components/LazyMount";

export default function HomePage() {
  const { openOrder, openDetails } = useOutletContext();
  usePageMeta(null, null);

  return (
    <>
      <Hero onOpenModal={openOrder} />
      <About />
      <LazyMount id="products" rootMargin="400px" minHeight={640}>
        <Products onOpenOrder={openOrder} onOpenDetails={openDetails} />
        <Wholesale onOpenModal={openOrder} />
      </LazyMount>
      <Contact />
    </>
  );
}
