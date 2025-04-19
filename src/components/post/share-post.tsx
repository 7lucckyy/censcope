"use client";
import React, { HTMLAttributes } from "react";

export interface SharePostButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  platform: "twitter" | "facebook" | "linkedin" | "copy";
  text?: string;
  children: React.ReactNode;
}

export function SharePostButton({
  platform,
  text = "",
  children,
  ...props
}: SharePostButtonProps) {
  const sharePost = (platform: string, text: string) => {
    const url = window.location.href;
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    let shareUrl = "";

    switch (platform) {
      case "twitter": // Now X
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        return;
      default:
        console.error("Unsupported platform:", platform);
        return;
    }

    // Open in a new tab
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button onClick={() => sharePost(platform, text)} {...props}>
      {children}
    </button>
  );
}
