import React, { useState, useEffect } from "react";
import "./Tasks.css";

export const Tasks = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const deleteAllTasks = () => {
    localStorage.setItem("List", "[]");
    setTaskList([]);
  };

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  return (
    <>
      <p className="title">Your tasks</p>
      {taskList.length === 0 ? (
        <p>You don't have any tasks yet</p>
      ) : (
        taskList.map((task) => {
          return (
            <div key={Math.floor(Math.random() * 1000)}>
              <h2>{task.title}</h2>
              <p className="task-description">{task.description}</p>
            </div>
          );
        })
      )}
      {taskList.length === 0 ? (
        ""
      ) : (
        <button
          type="button"
          className="nes-btn is-error"
          onClick={deleteAllTasks}
        >
          Delete all tasks
        </button>
      )}
    </>
  );
};
