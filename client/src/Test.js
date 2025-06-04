import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');           // 📝 Stores what user types
  const [todos, setTodos] = useState([]);         // 📋 Stores the list of todos

  const handleAdd = () => {
    if (task.trim() === '') return;               // 🚫 Ignore if input is empty
    setTodos([...todos, task]);                   // ➕ Add task to list
    setTask('');                                   // 🧽 Clear input
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);  // ❌ Remove task
    setTodos(newTodos);
  };

  return (
    <div className="text-center mt-5">
      <h1 className="text-2xl font-bold mb-6">📝 React Todo List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="border px-4 py-2 rounded"
      />

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Add
      </button>

      <ul className="mt-6">
        {todos.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-2 py-1 rounded ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
