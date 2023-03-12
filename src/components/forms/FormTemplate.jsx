import React from "react";
import { motion } from "framer-motion";

function Template({ children }) {
  return (
    <motion.div
      className="w-full my-4 text-black dark:text-white"
      initial={{ opacity: 0, translateY: "20%" }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: "-20%" }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default Template;
