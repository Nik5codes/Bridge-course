import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Read a book",
    "Complete React assignment",
    "Meditate for 10 minutes",
    "Call a friend"
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to right, #f8b500, #fceabb);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .container {
          background-color: #ffffffee;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        h1 {
          margin-bottom: 1rem;
          font-size: 1.8rem;
          color: #333;
        }

        input {
          padding: 10px;
          width: 65%;
          border-radius: 8px;
          border: 1px solid #ccc;
          margin-right: 10px;
          font-size: 1rem;
        }

        .add {
          padding: 10px 16px;
          border: none;
          background-color: #4caf50;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }

        .add:hover {
          background-color: #45a049;
        }

        ol {
          list-style-type: decimal;
          padding-left: 1.2rem;
          margin-top: 1.5rem;
          text-align: left;
        }

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #000000ff;
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .text {
          flex-grow: 1;
        }

        .delete {
          margin-left: 12px;
          padding: 6px 10px;
          border: none;
          background-color: #e53935;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
        }

        .delete:hover {
          background-color: #d32f2f;
        }
      `}</style>

      <div className="container">
        <h1>My To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInput}
          />
          <button className="add" onClick={addTask}>Add</button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
