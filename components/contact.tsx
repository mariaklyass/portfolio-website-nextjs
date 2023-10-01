"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 dark:text-stone-400 -mt-6">
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto:klyassmaria@gmail.com
"
        >
          klyassmaria@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        // ref={ref}
        className="mt-10 flex flex-col mb-10 mx-auto my-20 justify-center rounded-sm  bg-stone-100 mix-blend-multiply dark:bg-[#424141] dark:mix-blend-normal p-5 drop-shadow-xl"
        action={async (formData) => {
          formRef.current?.reset();

          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
        ref={formRef}
      >
        <input
          className="h-14 px-4 rounded-lg border border-zinc-500 dark:bg-stone-200"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-zinc-500 dark:bg-stone-200 p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
