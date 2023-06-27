import { useState } from 'react';

export default function Form({ onNewTask }) {
  const [task, setTask] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      description: task,
      id: new Date().toISOString(),
      completed: false,
    };
    if (!newTask.description) return;
    onNewTask(newTask);
    setTask('');
  }
  return (
    <div className="form" onSubmit={handleSubmit}>
      <h2>Add a new task</h2>
      <form>
        <input
          type="text"
          placeholder="Description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn__main" type="submit">
          Add task
        </button>
        <span className="btn btn__secondary" onClick={() => setTask('')}>
          Clear
        </span>
      </form>
    </div>
  );
}
