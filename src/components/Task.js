import React from "react";
import Task from '../Task';
function Task({ task = {}, onDeleteTask }) {
  const { text, category } = task;

  const handleDelete = () => {
    onDeleteTask(task); // Call the onDeleteTask function with the task object as an argument
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
  test("displays the task category", () => {
    render(<Task task={{ text: "text!", category: "category!" }} />);
    expect(screen.queryByText("category!")).toBeInTheDocument();
  });
}

export default Task;
