import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem("noor-hashtom-theme");
    } catch (e) {
      /* ignore */
    }
    const preferred =
      saved ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("noor-hashtom-theme", next);
    } catch (e) {
      /* ignore */
    }
  };

  return [theme, toggle];
}
