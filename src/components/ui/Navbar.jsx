import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

function Navbar({ theme, setTheme }) {
  const AnimateSVG = ({ type }) => {
    return (
      <motion.svg
        className="h-6 w-6 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={() => {
          setTheme(!theme);
        }}
      >
        {type === "sun" ? (
          <SunIcon className="fill-white" />
        ) : (
          <MoonIcon className="fill-black" />
        )}
      </motion.svg>
    );
  };

  return (
    <nav className="fixed flex flex-row items-center justify-between w-full py-2 px-20 h-20 bg-white dark:bg-black duration-300 z-50">
      <p className="flex-none text-2xl font-bold text-black dark:text-white duration-300">
        Resume Builder
      </p>
      <div className="flex absolute left-1/2 top-1/2 gap-4 -translate-x-[50%] -translate-y-[50%] text-black dark:text-white child:cursor-pointer child-hover:text-black dark:child-hover:text-white child-hover:scale-110 child:text-lg child:duration-300 child:select-none">
        {/* <p>Home</p> */}
        <p>Create</p>
      </div>

      <AnimatePresence>
        {theme ? <AnimateSVG type={"sun"} /> : <AnimateSVG type={"moon"} />}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
