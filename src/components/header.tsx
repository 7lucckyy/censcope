import Image from "next/image";
import Link from "next/link";

import { CreatePostButton } from "./create-post-button";

export function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10">
      <div className="bg-white dark:bg-gray-950 flex justify-between items-center">
        <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="shrink-0 overflow-y-clip">
              <Image
                alt="Censcope logo"
                src="/logo.png"
                width={120}
                height={28}
                className="h-20 object-top"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 max-md:hidden">
            <Link
              className="text-sm/6 text-gray-950 dark:text-white"
              href="/admin"
            >
              Posts
            </Link>
            <Link
              className="text-sm/6 text-gray-950 dark:text-white"
              href="/admin/gallery"
            >
              Gallery
            </Link>
            <Link
              className="text-sm/6 text-gray-950 dark:text-white"
              href="/admin/users"
            >
              Users
            </Link>
            <CreatePostButton className="group inline-flex gap-0.5 flex-nowrap relative px-1.5 text-sm/6 text-sky-800 dark:text-sky-300">
              <span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30"></span>
              Post
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                className="absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
              >
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
              </svg>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                className="absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50"
              >
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
              </svg>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                className="absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
              >
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
              </svg>
              <svg
                width="5"
                height="5"
                viewBox="0 0 5 5"
                className="absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50"
              >
                <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
              </svg>
            </CreatePostButton>
          </div>
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              type="button"
              aria-label="Search"
              className="inline-grid size-7 place-items-center rounded-md"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="relative inline-grid size-7 place-items-center rounded-md text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/10 undefined"
              aria-label="Navigation"
            >
              <span className="absolute top-1/2 left-1/2 size-11 -translate-1/2 [@media(pointer:fine)]:hidden"></span>
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-4">
                <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
