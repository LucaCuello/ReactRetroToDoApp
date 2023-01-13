import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import "./CreateTaskForm.css";

const taskAddedpopup = () =>
  toast.success("Task added!", {
    duration: 1500,
  });

export const CreateTaskForm = ({ addTaskToLocalStorageList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setdescriptionError] = useState("");
  const [msgErrorStyle, setMsgErrorStyle] = useState({});
  const [errorType, setErrorType] = useState("");

  const isTitleEmpty = title === "",
    isDescriptionEmpty = description === "";

  const IsTitleLong = title.length > 40,
    isDescriptionLong = description.length > 110;

  const isTitleWhiteSpace = title.replace(/\s+/g, "").length === 0,
    isDescriptionWhiteSpace = description.replace(/\s+/g, "").length === 0;

  const createNewTask = (title, description) => {
    const newTask = {
      title,
      description,
    };
    addTaskToLocalStorageList(newTask);
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    if (isTitleEmpty || isDescriptionEmpty) {
      return (
        setTitleError("is-error"),
        setdescriptionError("is-error"),
        setErrorType("Your task should have both a title and a description"),
        setMsgErrorStyle({
          opacity: 1,
          transform: "scale(1)",
          color: "#e76e55",
        })
      );
    } else if (IsTitleLong || isDescriptionLong) {
      setTitleError("is-warning");
      setdescriptionError("is-warning");
      setErrorType("You've reached your maximum limit of characters allowed");
      setMsgErrorStyle({
        opacity: 1,
        transform: "scale(1)",
        color: "#f7d51d",
      });
    } else if (isTitleWhiteSpace || isDescriptionWhiteSpace) {
      setTitleError("is-warning");
      setdescriptionError("is-warning");
      setErrorType("White spaces are not allowed");
      setMsgErrorStyle({
        opacity: 1,
        transform: "scale(1)",
        color: "#f7d51d",
      });
    } else {
      createNewTask(title.trim(), description.trim());
      setTitleError("");
      setdescriptionError("");
      setTitle("");
      setDescription("");
      setMsgErrorStyle({});
      taskAddedpopup();
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
      <span className="error-msg" style={msgErrorStyle}>
        {errorType}
      </span>
      <button className="nes-btn is-primary">Create</button>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            color: "#1a1515",
            border: "4px solid #1a1515",
          },
          error: {
            style: {
              background: "#fff",
            },
          },
        }}
      />
    </form>
  );
};
