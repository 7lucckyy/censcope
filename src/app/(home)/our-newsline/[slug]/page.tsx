import Image from "next/image";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { and, eq } from "drizzle-orm";
import readingTimeEstimate from "read-time-estimate";

import { db } from "@/db";
import { posts, users } from "@/db/schema";
import TiptapRenderer from "@/components/editor/renderer";
import { PostToc } from "@/components/editor/renderer/components/post-toc";
import Link from "next/link";
import { SharePostButton } from "@/components/post/share-post";

async function OurNewslineItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const result = await db
    .select({
      content: posts.content,
      title: posts.title,
      author: users.name,
      date: posts.updatedAt,
    })
    .from(posts)
    .leftJoin(users, eq(posts.authorId, users.id))
    .where(and(eq(posts.slug, slug), eq(posts.published, true)));
  const post = result.at(0);

  if (!post) notFound();

  const {
    humanizedDuration, // 'less than a minute'
    // duration, // 0.23272727272727273
    // totalWords, // 9
    // wordTime, // 0.03272727272727273
    // totalImages, // 1
    // imageTime, //  0.2
    // otherLanguageTimeCharacters, // 6
    // otherLanguageTime, // 0.012
  } = readingTimeEstimate(post.content!, 275, 12, 500, ["img", "Image"]);

  return (
    <main>
      <div className="bg-[url('/noise-light.svg')] mt-28 relative">
        <article className="max-w-content mx-auto grid grid-cols-4 gap-x-4 px-4 md:grid-cols-8 2xl:grid-cols-12 items-start py-20">
          <div className="lg:hidden col-span-full">
            <Link
              className="flex items-center gap-1 font-mono text-xs uppercase leading-none"
              href="/our-newsline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="size-3"
                viewBox="0 0 24 24"
              >
                <path d="m12 19-7-7 7-7M19 12H5"></path>
              </svg>
              All articles
            </Link>
          </div>
          <PostToc />
          <div className="flex flex-col gap-12 rounded-2xl border bg-white p-8 2xl:col-start-4 2xl:col-span-6 lg:col-start-3 lg:col-span-4 col-span-full">
            <header className="flex flex-col gap-6">
              <Link
                className="lg:flex hidden items-center gap-1 font-mono text-xs uppercase leading-none"
                href="/our-newsline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="size-3"
                  viewBox="0 0 24 24"
                >
                  <path d="m12 19-7-7 7-7M19 12H5"></path>
                </svg>
                All articles
              </Link>
              <div className="text-dark/50 text-sm font-cavet flex w-fit justify-between gap-5 font-bold uppercase">
                <p>{format(post.date, "LLL dd yyy")}</p>
                <p className="border-l"></p>
                <p>{humanizedDuration} read</p>
              </div>

              <h1 className="uppercase !leading-none text-[42px] md:text-6xl">
                {post.title}
              </h1>
            </header>
            <div
              className="prose max-w-full flex flex-col gap-6 *:font-inter"
              id="article-content"
            >
              <TiptapRenderer>{String(post.content)}</TiptapRenderer>
            </div>
          </div>
          <div className="my-16 lg:hidden col-span-full">
            <hr />
          </div>
          <aside className="flex flex-col sticky top-8 max-h-[calc(100vh-4rem)] gap-8 overflow-y-auto 2xl:col-start-10 2xl:col-span-3 lg:col-start-7 lg:col-span-2 col-span-full">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3 lg:order-1">
                <div className="text-xs font-inter uppercase">/Authors</div>
                <div className="flex lg:flex flex-col flex-wrap gap-4">
                  <div className="flex items-center">
                    <Image
                      alt={`${post.author}'s photo`}
                      width="40"
                      height="40"
                      className="border-green size-10 rounded-full border"
                      src="/_next/image?url=%2Fstatic%2Fimages%2Fteam%2Fabroshar.jpg&amp;w=96&amp;q=75"
                    />
                    <div className="ml-2">{post.author}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:order-3">
                <div className="text-xs font-inter uppercase">/Share</div>
                <ul className="flex items-center gap-4">
                  <li>
                    <SharePostButton
                      text={post.title}
                      platform="twitter"
                      className="flex flex-col bg-light-blur size-10 items-center justify-center rounded-lg border lg:order-4"
                    >
                      <div className="sr-only">Share on Twitter</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          d="M16.861 4h2.699l-5.896 6.777L20.6 20h-5.431l-4.254-5.593L6.048 20h-2.7l6.306-7.25L3 4h5.569l3.845 5.113L16.86 4Zm-.947 14.375h1.495L7.756 5.54H6.152l9.762 12.836Z"
                        ></path>
                      </svg>
                    </SharePostButton>
                  </li>
                  <li>
                    <SharePostButton
                      text={post.title}
                      platform="facebook"
                      className="flex flex-col bg-light-blur size-10 items-center justify-center rounded-lg border lg:order-4"
                    >
                      <div className="sr-only">Share on Facebook</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          d="M9.956 21v-8.21H7v-3.2h2.956V7.23c0-2.739 1.79-4.23 4.403-4.23 1.252 0 2.327.087 2.641.126v2.862h-1.813c-1.42 0-1.696.632-1.696 1.559V9.59h3.39l-.442 3.2h-2.948V21H9.956Z"
                        ></path>
                      </svg>
                    </SharePostButton>
                  </li>
                  <li>
                    <SharePostButton
                      text={post.title}
                      platform="linkedin"
                      className="flex flex-col bg-light-blur size-10 items-center justify-center rounded-lg border lg:order-4"
                    >
                      <div className="sr-only">Share on LinkedIn</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="14"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M4.039 4.649H.818V14h3.22V4.649Zm.255-2.964C4.294.755 3.458 0 2.43 0 1.396 0 .563.755.563 1.685s.833 1.686 1.866 1.686c1.03 0 1.865-.755 1.865-1.686Zm4.112 2.811H5.538V14h2.989V9.3c0-1.24.237-2.442 1.794-2.442 1.535 0 1.555 1.418 1.555 2.52V14h2.991V8.788c0-2.56-.56-4.527-3.589-4.527-1.456 0-2.432.787-2.83 1.535h-.042v-1.3Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </SharePostButton>
                  </li>
                  <li>
                    <SharePostButton
                      text={post.title}
                      platform="copy"
                      className="flex flex-col bg-light-blur size-10 items-center justify-center rounded-lg border lg:order-4"
                    >
                      <div className="sr-only">Copy link</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M2.164 1.786a4.93 4.93 0 0 1 7.15 0l2.562 2.66c1.953 2.03 1.953 5.304 0 7.332l-.01.012c-.414.43-.885.772-1.39 1.022a.875.875 0 0 1-.777-1.568 3.22 3.22 0 0 0 .903-.666l.013-.013c1.3-1.351 1.3-3.554 0-4.905L8.053 3a3.18 3.18 0 0 0-4.628 0l-.012.011c-1.3 1.351-1.3 3.554 0 4.905l1.096 1.139a.875.875 0 0 1-1.26 1.213L2.152 9.13C.2 7.101.2 3.826 2.152 1.798m0 0 .012-.012-.012.012ZM9.57 5.582a.875.875 0 0 1-.395 1.173 3.25 3.25 0 0 0-.903.666l-.001.001-.012.012c-1.3 1.351-1.3 3.554 0 4.905L10.821 15a3.18 3.18 0 0 0 4.629 0l.011-.012c1.3-1.351 1.3-3.553 0-4.904l-1.096-1.14a.875.875 0 1 1 1.26-1.213l1.097 1.139c1.953 2.029 1.953 5.303 0 7.332l-.012.012a4.93 4.93 0 0 1-7.15 0l-2.562-2.662c-1.953-2.028-1.953-5.303 0-7.331l.011-.011c.413-.43.884-.773 1.389-1.023a.875.875 0 0 1 1.172.395Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </SharePostButton>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
}

export default OurNewslineItemPage;
