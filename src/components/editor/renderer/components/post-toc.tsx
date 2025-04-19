"use client";

import { useEffect, MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

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

  if (!items.length) return null;

  return (
    <details className="flex flex-col my-6 max-h-[calc(100vh-4rem)] gap-2 lg:sticky lg:top-8 lg:my-0 lg:gap-8 2xl:col-span-3 lg:col-span-2 col-span-full">
      <summary className="bg-light-blur rounded-xl border cursor-pointer list-none !marker:content-none">
        <span className="flex w-full items-center gap-2 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            className="size-5"
          >
            <path
              fill="#181618"
              d="M10.02 20c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.554 0 6.835 1.914 8.632 5 1.797 3.125 1.797 6.914 0 10a9.925 9.925 0 0 1-8.633 5Zm-2.5-6.875V15h5v-1.875h-1.25V8.75H7.52v1.875h1.875v2.5H7.52ZM11.27 7.5V5h-2.5v2.5h2.5Z"
            ></path>
          </svg>
          <span>Table of Content</span>
          <span className="ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="size-5 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </span>
        </span>
      </summary>
      <nav className="">
        <ul className="flex-col z-10 !hidden overflow-y-auto lg:!flex">
          {items.map((item) => (
            <li
              key={item.id}
              className="list-inside"
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
                  "transition-colors py-2 font-titillium uppercase text-sm border-s-[0.375rem] first-of-type:pt-0 last-of-type:pb-0 ps-4",
                  activeId === item.id
                    ? "!text-dark !border-dark"
                    : "text-dark/30 border-dark/10"
                )}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
