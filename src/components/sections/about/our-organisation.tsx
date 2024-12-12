"use client";
import { useIntersectionObserver } from "@/hooks/observe.hook";

export default function OurOrganisation() {
  const { ref } = useIntersectionObserver();
  
  return <section ref={ref} id="our-organisation" className="py-14 px-xl lg:px-2xl"></section>;
}
