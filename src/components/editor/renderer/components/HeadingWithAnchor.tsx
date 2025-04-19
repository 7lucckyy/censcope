import React, { ReactNode, JSX } from "react";
import Link from "next/link";

interface HeadingWithAnchorProps {
  level: number;
  id?: string;
  children?: ReactNode;
}

export function HeadingWithAnchor({
  level,
  children,
  id,
}: HeadingWithAnchorProps) {
  const Heading = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Heading id={id}>
      <Link
        href={`#${id}`}
        className="not-prose relative group !font-inter hover:before:content-['#'] hover:before:absolute hover:before:-left-6 hover:before:top-1/2 hover:before:-translate-y-1/2 hover:before:opacity-70 hover:before:text-[1em]"
      >
        {children}
      </Link>
    </Heading>
  );
}
