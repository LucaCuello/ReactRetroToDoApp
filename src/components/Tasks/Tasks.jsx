import "./Tasks.css";

export const Tasks = ({ tasks }) => {
  const deleteAllTasks = () => {
    localStorage.removeItem("List");
    document.location.reload();
  };

  return (
    <>
      <p className="title">Your tasks</p>
      {tasks.length === 0 ? (
        <p>You don't have any tasks yet</p>
      ) : (
        tasks.map((task) => {
          return (
            <div
              className="task-container"
              key={Math.floor(Math.random() * 1000)}
            >
              <h2>{task.title}</h2>
              <p className="task-description">{task.description}</p>
            </div>
          );
        })
      )}
      {tasks.length === 0 ? (
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
