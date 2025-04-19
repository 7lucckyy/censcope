import * as prod from "react/jsx-runtime";
import rehypeParse from "rehype-parse";
import rehypeReact, { type Components } from "rehype-react";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { Root, Element } from "hast";

interface ProcessorOptions {
  components?: Partial<Components>;
}

const addHeadingIds = () => {
  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (["h1", "h2", "h3", "h4", "h5"].includes(node.tagName)) {
        // Ensure node has children and the first child is text
        if (
          node.children &&
          node.children.length > 0 &&
          node.children[0].type === "text"
        ) {
          const text = node.children[0].value;
          node.properties = { ...node.properties, id: slugify(text) };
        }
      }
    });
    return tree;
  };
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]+/g, "")
    .replace(/[-\s]+/g, "-")
    .trim()
    .replace(/^-+|-+$/g, "");
}

export function createProcessor({ components }: ProcessorOptions = {}) {
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(addHeadingIds)
    .use(rehypeReact, {
      Fragment: prod.Fragment,
      jsx: prod.jsx,
      jsxs: prod.jsxs,
      components,
    });
}
