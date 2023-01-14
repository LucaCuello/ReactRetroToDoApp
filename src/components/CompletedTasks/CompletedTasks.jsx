import React from "react";
import "./CompletedTasks.css";
import { motion, AnimatePresence } from "framer-motion";

export const CompletedTasks = ({ tasks, deleteTasks }) => {
  return (
    <>
      <AnimatePresence>
        <p className="title">Completed tasks</p>
        {!tasks.length ? (
          <p>You haven't completed any task yet</p>
        ) : (
          tasks.map((task) => {
            return (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                className="task-container completed-container"
              >
                <h2>{task.title}</h2>
                <p className="task-description">{task.description}</p>
              </motion.div>
            );
          })
        )}
        {!tasks.length ? (
          ""
        ) : (
          <button
            type="button"
            className="nes-btn is-error"
            onClick={deleteTasks}
          >
            Clear all
          </button>
        )}
      </AnimatePresence>
    </>
  );
};
