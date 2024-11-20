"use client";

import { motion } from "framer-motion";
import React from "react";

interface MDXVideoProps {
  caption?: string;
  src: string;
}

export default function MDXVideo({ caption, src }: MDXVideoProps) {
  const href = src.toString();

  return (
    <motion.a
      className="my-6 flex cursor-pointer flex-col justify-end gap-2"
      href={href}
      whileHover={{ scale: 0.975, opacity: 0.9 }}
    >
      <video
        controls
        autoPlay
        loop
        playsInline
        className="relative w-full overflow-hidden rounded-md"
        style={{
          objectFit: "contain",
          width: "120%",
          height: "auto",
          objectPosition: "center",
          transition: "all 0.5s ease",
        }}
      >
        <source src={href} type="video/mp4" />
      </video>

      {caption && <sub className="pt-2 text-center">{caption}</sub>}
    </motion.a>
  );
}
