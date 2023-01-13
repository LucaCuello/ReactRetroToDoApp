import { toast } from "react-hot-toast";
import "./Tasks.css";

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
      {!tasks.length ? (
        <p>You don't have any tasks yet</p>
      ) : (
        tasks.map((task) => {
          return (
            <div className="task-container" key={task.id}>
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
            </div>
          );
        })
      )}
      {!tasks.length ? (
        ""
      ) : (
        <button
          type="button"
          className="nes-btn is-error"
          onClick={() => {
            deleteAllTasks();
            allTasksDeletedPopup();
          }}
        >
          Delete all tasks
        </button>
      )}
    </>
  );
};
