"use client";

import { useEffect, MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { List } from "lucide-react"

import { useToc } from "@/hooks/use-toc";
import { cn } from "@/lib/utils";

export function PostToc() {
  const router = useRouter();
  const pathname = usePathname();
  const { items, activeId } = useToc({
    containerSelector: "#article-content",
    headingSelector: "h1, h2, h3, h4",
    observerOptions: { rootMargin: "0px 0px -75% 0px", threshold: 1 },
  });

  const scrollToHeading = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    router.push(`${pathname}#${id}`, { scroll: false });
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative 2xl:col-span-3 lg:col-span-2 col-span-full">
      <div
        className="
      fixed inset-0 bg-black/30
      opacity-0 pointer-events-none
      peer-open:opacity-100 peer-open:pointer-events-auto
      transition-opacity
      lg:hidden
    "
      />
      <details
        className="
    peer
    group/accordion
    fixed bottom-4 right-4 z-50
    flex flex-col-reverse
    items-end
    lg:static lg:flex-col lg:top-8
    lg:items-stretch
    lg:gap-4
    
  "
      >

        <summary
          className="flex w-full items-center gap-2 p-2 lg:p-4 bg-light-blur rounded-md lg:rounded-xl border cursor-pointer list-none !marker:content-none shadow-lg lg:shadow-none">
          <List
            fill="#181618"
            className="size-6" />
          <span className="hidden lg:inline">Table of Content</span>

          <span className="ml-auto hidden lg:inline group-open/accordion:rotate-180 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="size-5 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <ul
          className="
    order-first
    lg:order-none
    lg:max-h-none lg:overflow-visible

    absolute bottom-full right-0 mb-3
    max-lg:w-[90vw]
    w-full
    max-h-0 overflow-hidden
    rounded-xl border bg-light-blur shadow-lg
    group-open/accordion:max-h-[60vh]
    transition-[max-height] duration-300 ease-in-out

    lg:static lg:mb-0
    lg:shadow-none lg:border-0
    p-4
  "
        >
          {!items.length ?
            (<div className="text-start py-2 text-dark/50 text-sm lg:text-base italic">
              No items in the table of contents yet.
            </div>
            ) : (
              items.map((item) => (
                <li
                  key={item.id}
                  className="list-outside my-0 py-0"
                  style={
                    {
                      // paddingLeft: `${(item.level - 1) * 1}rem`,
                    }
                  }
                >
                  <Link
                    href={`#${item.id}`}
                    onClick={scrollToHeading(item.id)}
                    className={cn(
                      "block transition-colors py-2 uppercase text-sm border-s-[0.375rem] first-of-type:pt-0 last-of-type:pb-0 ps-4",
                      activeId === item.id
                        ? "!text-dark !border-dark"
                        : "text-dark/30 border-dark/10"
                    )}
                  >
                    {item.text}
                  </Link>
                </li>
              )))}
        </ul>
      </details>
    </div>
  );
}
