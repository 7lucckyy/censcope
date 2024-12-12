"use client";
import { useIntersectionObserver } from "@/hooks/observe.hook";

export default function OurAccount() {
  const { ref } = useIntersectionObserver();

  return <section ref={ref} id="our-account" className="h-80"></section>;
}
