import React, { useState } from "react";
import "./CreateTaskForm.css";

export const CreateTaskForm = ({ addTaskToLocalStorageList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createNewTask = (title, description) => {
    const newTask = {
      title,
      description,
    };
    addTaskToLocalStorageList(newTask);
  };

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setdescriptionError] = useState("");

  const isTitleEmpty = () => {
    if (title === "") {
      return true;
    } else return false;
  };

  const isDescriptionEmpty = () => {
    if (description === "") {
      return true;
    } else return false;
  };

  const [msgError, setMsgError] = useState({});

  const handdleSubmit = (e) => {
    e.preventDefault();
    if (isTitleEmpty() || isDescriptionEmpty()) {
      return (
        setTitleError("is-error"),
        setdescriptionError("is-error"),
        setMsgError({
          opacity: 1,
          transform: "scale(1)",
        }),
        console.log(msgError)
      );
    } else {
      createNewTask(title.trim(), description.trim());
      setTitleError("");
      setdescriptionError("");
      setTitle("");
      setDescription("");
      setMsgError({});
      e.target.reset();
    }
  };

  return (
    <form className="task-form" onSubmit={handdleSubmit}>
      <div className="nes-field">
        <label htmlFor="name_field">Title</label>
        <input
          type="text"
          autoFocus
          id="name_field"
          className={"nes-input " + titleError}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="nes-field nes-field-margin">
        <label htmlFor="textarea_field">Description</label>
        <textarea
          id="textarea_field"
          className={"nes-textarea " + descriptionError}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <span className="error-msg" style={msgError}>
        Your task should have both a title and a description
      </span>
      <button className="nes-btn is-primary">Create</button>
    </form>
  );
};
