'use client';

import { useEffect } from "react";

export default function RevealEffects() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    document.documentElement.classList.add("reveal-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) element.classList.add("in");
        else element.classList.remove("in");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 65, 420)}ms`;
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);
  return null;
}
