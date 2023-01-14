import { toast } from "react-hot-toast";
import "./Tasks.css";
import { motion, AnimatePresence } from "framer-motion";

const taskDeletedPoup = () =>
  toast.success("Task deleted!", {
    duration: 1500,
  });

const allTasksDeletedPopup = () =>
  toast.success("All tasks deleted", {
    duration: 1500,
  });

export const Tasks = ({ tasks, removeTask, deleteAllTasks, markAsDone }) => {
  return (
    <>
      <p className="title">Your tasks</p>
      <AnimatePresence>
        {!tasks.length ? (
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            You don't have any tasks yet
          </motion.p>
        ) : (
          tasks.map((task) => {
            return (
              <motion.div
                initial={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: 20 }}
                className="task-container"
                key={task.id}
              >
                <h2>{task.title}</h2>
                <p className="task-description">{task.description}</p>
                <i
                  className="nes-icon close is-small delete-task nes-pointer"
                  title="Remove task"
                  onClick={() => {
                    removeTask(task.id);
                    taskDeletedPoup();
                  }}
                ></i>
                <label className="nes-pointer">
                  <input
                    type="checkbox"
                    className="nes-checkbox"
                    onClick={() => {
                      markAsDone(task.id, task);
                    }}
                  />
                  <span className="checkbox-desc">Completed</span>
                </label>
              </motion.div>
            );
          })
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!tasks.length ? (
          ""
        ) : (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 0.4,
            }}
            type="button"
            className="nes-btn is-error"
            onClick={() => {
              deleteAllTasks();
              allTasksDeletedPopup();
            }}
          >
            Delete all tasks
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
