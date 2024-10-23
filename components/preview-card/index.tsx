"use client";

import { Link as NextViewTransition } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

interface PreviewCardProps {
  href: string;
  title: string;
  date: string;
  image: string | null;
  summary: string;
  tags: string[];
}

export default function PreviewList({
  href,
  title,
  date,
  image,
  summary,
  tags,
}: PreviewCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <NextViewTransition
      href={href}
      className="relative flex w-full justify-between py-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p>{title}</p>
      <p className="mt-0 text-muted">{date}</p>
      {hovered &&
        createPortal(
          <div className="fixed top-10 right-10 z-10 md:flex hidden w-96 flex-col gap-3 rounded-xl border border-border bg-background p-4 ">
            {image && (
              <Image
                src={image || ""}
                width={200}
                height={200}
                alt={""}
                className="mb-4 w-full rounded-md"
              />
            )}

            <h3 className="text-black-a10 dark:text-white-a10">{title}</h3>
            {summary && <p className="mt-1 text-muted">{summary}</p>}
            {tags && (
              <div className="flex flex-wrap gap-2 ">
                {tags.map((tag) => (
                  <span className="px-4 py-1 bg-black-a1 dark:bg-white-a1 rounded-md text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>,
          document.body,
        )}
      {/* {hovered && (
        <div className="fixed top-10 -right-1/2 z-50 flex w-96 flex-col gap-2 rounded-xl border border-border bg-background p-4">
          {image && (
            <Image
              src={image || ""}
              width={200}
              height={200}
              alt={""}
              className="mb-4 w-full rounded-md"
            />
          )}

          <h3 className="text-black-a10 dark:text-white-a10">{title}</h3>
          {summary && <p className="mt-0 text-muted">{summary}</p>}
        </div>
      )} */}
    </NextViewTransition>
  );
}
