"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-[5.7rem] bg-about_l_image dark:bg-about_d_image bg-cover h-screen "
      id="about"
      ref={ref}
    >
      <h2 className="text-3xl font-medium capitalize mb-8 mt-2 text-center pt-2 dark:text-stone-700">
        About me
      </h2>
      <p className="bg-slate-50/10 mix-blend-soft-luminosity rounded-lg p-3 backdrop-blur-[0.5rem] shadow-lg shadow-black/5 dark:bg-slate-50/40 dark:text-stone-950 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestias
        nihil tempora est vel debitis modi, explicabo voluptates, repudiandae
        eveniet deleniti. Cumque, autem voluptas illo nemo nihil fuga
        exercitationem magnam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatibus error incidunt, nemo praesentium sit,
        suscipit ratione dicta dolor at distinctio veritatis assumenda
        doloremque molestiae totam debitis quae omnis repellendus fuga?
      </p>
    </section>
  );
}
