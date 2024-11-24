import React, { useState } from "react";

const ToDoWidget = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const task = {
      name: input.trim(),
      isDone: false,
    }
    if (input.trim()) {
      setTasks([...tasks, task]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const checkTask = (index) => {
    tasks[index].isDone = !tasks[index].isDone;
    setTasks([...tasks]);
  };

  return (
    <div className="widget">
      <h3>To-Do List</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Task"
        className="formInput"
      />
      <button onClick={addTask} className="outlined-button">Add Task</button>
      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index} className={`item ${task.isDone ? "taskDone" : ""}`}>
            <div className="taskText">{task.name}</div> 
            <button className="outlined-delete-button" onClick={() => removeTask(index)} style={{marginRight: "1rem"}}>Remove</button>
            {!task.isDone && (<button className="outlined-success-button" onClick={() => checkTask(index)}>Done</button>)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoWidget;
