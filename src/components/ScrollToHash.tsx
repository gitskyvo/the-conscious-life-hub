import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      let attempts = 0;
      const maxAttempts = 20;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 50);
        }
      };

      // Slight initial delay to allow React tree to mount if navigating from another page
      setTimeout(tryScroll, 60);
    }
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
