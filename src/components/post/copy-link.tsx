"use client";

import { useState } from 'react'
import { RiLinkUnlinkM } from "react-icons/ri";

export function CopyLinkButton() {
    const [copied, setCopied] = useState(false);
    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            }}
            type="button"
            aria-label="Copy link"
            className="flex flex-col bg-light-blur size-10 items-center justify-center rounded-lg border lg:order-4"
        >
            <div className="sr-only">Copy link</div>
            {copied ?
                <RiLinkUnlinkM className="size-5" />
                :
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
            }
        </button>
    )
};