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
}

export default function PreviewList({
  href,
  title,
  date,
  image,
  summary,
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
          <div className="absolute top-10 right-10 z-10 flex hidden w-96 flex-col gap-2 rounded-xl border border-border bg-background p-4 md:block ">
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
          </div>,
          document.body,
        )}
      {/* {hovered && (
        <div className="absolute top-10 right-12 z-10 flex w-96 flex-col gap-2 rounded-xl border border-border bg-background p-4">
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
