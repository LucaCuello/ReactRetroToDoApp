import React, { useState, useEffect } from "react";
import { Container } from "./Container/Container";
import { WelcomeMessage } from "./WelcomeMessage/WelcomeMessage";
import { CreateTask } from "./CreateTask/CreateTask";
import { Tasks } from "./Tasks/Tasks";
import { CompletedTasks } from "./CompletedTasks/CompletedTasks";
import { Footer } from "./Footer/Footer";

export const TodoApp = () => {
  const [StoragedTasks, setStoragedTasks] = useState(
    JSON.parse(localStorage.getItem("List")) || []
  );

  const completedTasks =
    JSON.parse(localStorage.getItem("CompletedTasks")) || [];

  const createTask = (newTask) => {
    if (!newTask) return;
    newTask.id = crypto.randomUUID();
    setStoragedTasks((task) => (task = [...task, newTask]));
  };

  const deleteTask = (id) => {
    setStoragedTasks(StoragedTasks.filter((task) => task.id !== id));
  };

  const deleteAllTasks = () => {
    setStoragedTasks([]);
  };

  const deleteAllCompletedTasks = () => {
    localStorage.removeItem("CompletedTasks");
    document.location.reload();
  };

  const markAsDone = (id, completedTask) => {
    setStoragedTasks(StoragedTasks.filter((task) => task.id !== id));
    localStorage.setItem(
      "CompletedTasks",
      JSON.stringify([...completedTasks, completedTask])
    );
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
        children={<CreateTask saveTask={createTask} />}
      />
      <Container
        classList="nes-container with-title is-centered"
        children={
          <Tasks
            tasks={StoragedTasks}
            removeTask={deleteTask}
            deleteAllTasks={deleteAllTasks}
            markAsDone={markAsDone}
          />
        }
      />
      {!completedTasks.length ? (
        ""
      ) : (
        <Container
          classList={"nes-container is-dark with-title"}
          children={
            <CompletedTasks
              tasks={completedTasks}
              deleteTasks={deleteAllCompletedTasks}
            />
          }
        />
      )}

      <Container
        classList="nes-container is-dark with-title footer-container"
        children={<Footer />}
      />
    </>
  );
};
