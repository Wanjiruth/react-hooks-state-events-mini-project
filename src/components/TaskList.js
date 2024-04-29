import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  
  const [taskList, setTaskList] = useState(tasks);

  const handleDeleteTask = (taskToDelete) => {
  
    const updatedTasks = taskList.filter((task) => task !== taskToDelete);
    
    setTaskList(updatedTasks);
  };

  return (
    <div className="tasks">
      {/* Map over the tasks array to create Task components */}
      {taskList.map((task, index) => (
        <Task key={index} task={task} onDeleteTask={handleDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
