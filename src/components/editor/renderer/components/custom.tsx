import { ImgHTMLAttributes } from "react";
import Image from "next/image";
import { Components } from "rehype-react";

import { HeadingWithAnchor } from "./HeadingWithAnchor";
import { getSupabaseImagePath } from "@/lib/utils";

export const components: Partial<Components> = {
  h1: ({ ...props }) => <HeadingWithAnchor level={1} {...props} />,
  h2: ({ ...props }) => <HeadingWithAnchor level={2} {...props} />,
  h3: ({ ...props }) => <HeadingWithAnchor level={3} {...props} />,
  h4: ({ ...props }) => <HeadingWithAnchor level={4} {...props} />,
  h5: ({ ...props }) => <HeadingWithAnchor level={5} {...props} />,
  img: ({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      src={getSupabaseImagePath(src!)}
      alt={alt || ""}
      width={540}
      height={720}
      className="mx-auto rounded-lg"
    />
  ),
  iframe: ({ ...props }) => (
    <div>
      <iframe
        {...props}
        allowFullScreen={true}
        className="w-full h-full aspect-video mx-auto rounded-lg"
      />
    </div>
  ),
};
