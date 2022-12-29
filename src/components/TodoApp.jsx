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
    setStoragedTasks((task) => (task = [...task, newTask]));
  };

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(StoragedTasks));
  }, [StoragedTasks]);

  return (
    <>
      <Container
        classList="nes-container is-centered with-title welcome-message"
        children={<WelcomeMessage></WelcomeMessage>}
      ></Container>
      <Container
        classList="nes-container is-dark with-title is-centered"
        children={
          <CreateTaskContainer saveTask={createTask}></CreateTaskContainer>
        }
      ></Container>
      <Container
        classList="nes-container with-title is-centered"
        children={<Tasks tasks={StoragedTasks}></Tasks>}
      ></Container>
      <Container
        classList="nes-container is-dark with-title footer-container"
        children={<Footer></Footer>}
      ></Container>
    </>
  );
};
