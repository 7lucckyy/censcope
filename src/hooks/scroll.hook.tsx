"use client";
import React from "react";

export function useScroll() {
  const [scrollPosition, setScrollPosition] = React.useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  React.useEffect(() => {
    const root = document.querySelector("#root")!;

    function handleScroll() {
      const { scrollX, scrollY, innerWidth, innerHeight } = window;
      const { scrollWidth, scrollHeight } = document.documentElement;

      setScrollPosition({
        top: scrollY,
        left: scrollX,
        right: scrollWidth - innerWidth - scrollX,
        bottom: scrollHeight - innerHeight - scrollY,
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
