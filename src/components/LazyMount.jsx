import { useEffect, useRef, useState } from "react";

export default function LazyMount({
  children,
  rootMargin = "350px",
  minHeight = 320,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref}>
      {visible ? (
        children
      ) : (
        <div className="lazy-skeleton" style={{ minHeight }}>
          <div className="spinner-sm"></div>
        </div>
      )}
    </div>
  );
}
