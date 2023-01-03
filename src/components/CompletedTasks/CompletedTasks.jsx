import React from "react";
import "./CompletedTasks.css";

export const CompletedTasks = ({ tasks, deleteTasks }) => {
  return (
    <>
      <p className="title">Completed tasks</p>
      {!tasks.length ? (
        <p>You haven't completed any task yet</p>
      ) : (
        tasks.map((task) => {
          return (
            <div className="task-container completed-container" key={task.id}>
              <h2>{task.title}</h2>
              <p className="task-description">{task.description}</p>
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
          onClick={deleteTasks}
        >
          Clear all
        </button>
      )}
    </>
  );
};
