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
      <p className="bg-slate-50/10 mix-blend-soft-luminosity rounded-lg p-3 backdrop-blur-[0.5rem] shadow-lg shadow-black/5 dark:bg-slate-50/40 dark:text-stone-950">
        I&apos;m a self-taught Frontend Developer 🤓 <br />
        I&apos;m head over heels with web-development, and for year and a half
        that I have been studying, this feeling has only grown. My main sources
        of knowledge are Jonas Schmedtmann&apos;s HTML & CSS and JavaScript
        courses, Colt Steele&apos;s React course, freeCodeCamp Responsive Web
        Design curriculum and the Rolling Scopes School JavaScript/Front-end
        course. ...And hundreds and hundreds of hours of Youtube videos &
        reading Stack Overflow 😅 <br /> I enjoy the process of learning new
        stuff, especially the moment of doing something that was difficult and
        unclear before. <br />
        Besides programming, I like music and going to the gym.
      </p>
    </section>
  );
}
