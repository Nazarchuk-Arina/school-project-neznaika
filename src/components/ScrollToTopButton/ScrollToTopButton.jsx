import { useState, useEffect } from "react";
import s from "./ScrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${s.scrollToTop} ${isVisible ? s.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ⬆
    </button>
  );
};

export default ScrollToTopButton;
