import { useEffect } from "react";
import { SITE_NAME, DEFAULT_DESCRIPTION } from "../data/site";

// عنوان تب و توضیحات متا را برای هر صفحه تنظیم می‌کند.
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | زیورهای حرز و دعا`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description || DEFAULT_DESCRIPTION);
  }, [title, description]);
}
