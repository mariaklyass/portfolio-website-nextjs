"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  codeSnippet,
  linkDeploy,
  linkCode,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 -0.9", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [image, setImage] = useState(imageUrl);
  const toggleImage = () => {
    let value = image;
    if (value === imageUrl) {
      setImage(codeSnippet);
    } else {
      setImage(imageUrl);
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="mb-2 sm:mb-8 last:mb-0 flex"
    >
      <section className="bg-slate-50/10 mix-blend-soft-luminosity rounded-lg p-2 backdrop-blur-[0.5rem] shadow-lg shadow-black/5 hover:bg-slate-200/10 transition max-w-[50rem] border border-black/10 overflow-hidden sm:pr-8 flex flex-col dark:text-stone-300">
        <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-5 ">
          <h3 className="text-xl md:text-2xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="text-sm md:text-lg mt-2 leading-relaxed text-zinc-800 dark:text-stone-300">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-500/25 shadow-lg rounded-md mb-2 mt-2 bg-stone-500/30 text-stone-700 dark:text-stone-300"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <Image
            src={image}
            onClick={toggleImage}
            alt="project"
            quality={95}
            className="py-2 px-5 sm:pl-10 sm:pr-2 sm:pt-5 lg:object-contain lg:h-96"
          />

          <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-5 flex justify-start gap-4">
            <a href={linkDeploy}>
              <button className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-full text-white bg-gradient-to-r from-transparent via-teal-400 to-transparent hover:from-transparent hover:via-neutral-500 hover:to-transparent drop-shadow-xl hover:drop-shadow-2xl">
                Live
              </button>
            </a>

            <a href={linkCode}>
              <button className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-full text-white bg-gradient-to-r from-transparent via-neutral-500/50 to-transparent hover:from-transparent hover:via-neutral-500 hover:to-transparent drop-shadow-xl hover:drop-shadow-2xl">
                Code{" "}
              </button>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
