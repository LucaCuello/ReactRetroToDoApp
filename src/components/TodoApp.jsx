import React, { useState, useEffect } from "react";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";
import { CreateTaskContainer } from "./CreateTask/CreateTask";
import { Tasks } from "./Tasks/Tasks";
import { Container } from "./Container/Container";
import { Footer } from "./Footer/Footer";

export const TodoApp = () => {
  const [StoragedTasks, setStoragedTasks] = useState(
    JSON.parse(localStorage.getItem("List")) || []
  );

  const createTask = (newTask) => {
    if (!newTask) return;
    Object.assign(newTask, { id: StoragedTasks.length });
    setStoragedTasks((task) => (task = [...task, newTask]));
  };

  const deleteTask = (id) => {
    let tasks = StoragedTasks.filter((task) => task.id !== id);
    setStoragedTasks(tasks);
  };

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(StoragedTasks));
  }, [StoragedTasks]);

  return (
    <>
      <Container
        classList="nes-container is-centered with-title welcome-message"
        children={<WelcomeMessage />}
      />
      <Container
        classList="nes-container is-dark with-title is-centered"
        children={<CreateTaskContainer saveTask={createTask} />}
      />
      <Container
        classList="nes-container with-title is-centered"
        children={<Tasks tasks={StoragedTasks} removeTask={deleteTask} />}
      />
      <Container
        classList="nes-container is-dark with-title footer-container"
        children={<Footer />}
      />
    </>
  );
};
