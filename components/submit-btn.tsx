import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = experimental_useFormStatus();

  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-stone-300 bg-opacity-80 p-5 text:stone-800 dark:text-[#dfdad5] dark:bg-stone-900/50 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-neutral-900/60 disabled:scale-100 disabled:bg-opacity-65"
      type="submit"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover: translate-x-1 group-hover:translate-y-1" />
        </>
      )}
    </button>
  );
}
