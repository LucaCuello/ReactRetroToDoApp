import React from "react";
import "./CreateTask.css";
import { CreateTaskForm } from "../CreateTaskForm/CreateTaskForm";
import { CreateTaskInfo } from "../CreateTaskInfo/CreateTaskInfo";

export const CreateTaskContainer = ({ saveTask }) => {
  return (
    <>
      <CreateTaskInfo></CreateTaskInfo>
      <CreateTaskForm addTaskToLocalStorageList={saveTask}></CreateTaskForm>
    </>
  );
};
