import React from "react";
// import "./CompletedTasks.css";
import { motion, AnimatePresence } from "framer-motion";

export const Container = ({ classList, children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className={classList}
        transition={{
          duration: 0.3,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
