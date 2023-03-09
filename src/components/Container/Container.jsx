import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export const Container = ({ classList, children }) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          duration: 0.2,
        }}
        className={classList}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
