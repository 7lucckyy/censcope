import { useEffect, useState } from "react";

import { slugify } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
  node: Element;
}

interface UseTocOptions {
  containerSelector: string;
  headingSelector?: string;
  observerOptions?: IntersectionObserverInit;
}

export function useToc(options: UseTocOptions) {
  const {
    containerSelector,
    headingSelector = "h2, h3, h4",
    observerOptions,
  } = options;

  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = document.body.querySelector(containerSelector);

    if (!container) return;

    const updateItems = () => {
      const headings = container.querySelectorAll(headingSelector);
      const tocItems = Array.from(headings).map((heading, idx) => {
        heading.id =
          heading.id || slugify(heading.textContent ?? `heading-${idx}`);
        return {
          id: heading.id || slugify(heading.textContent ?? `heading-${idx}`),
          text: heading.textContent || "",
          level: parseInt(heading.tagName[1]),
          node: heading,
        };
      });
      setItems(tocItems);
    };

    // Initial query of headings
    updateItems();

    const mutationObserver = new MutationObserver(() => {
      updateItems();
    });

    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => mutationObserver.disconnect();
  }, [containerSelector, headingSelector]);

  useEffect(() => {
    const elements = items.map((item) => item.node);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(
            items.find((item) => item.node === entry.target)?.id ??
              entry.target.id
          );
        }
      });
    }, observerOptions);

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [items, observerOptions]);

  return { items, activeId };
}
