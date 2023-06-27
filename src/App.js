import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import View from './components/View';

const todos = [
  { description: 'mow the lawn', id: 1, completed: false },
  { description: 'feed the cat', id: 2, completed: false },
  { description: 'wash the dishes', id: 3, completed: true },
  { description: 'call the vet', id: 4, completed: false },
  { description: 'study for math', id: 5, completed: false },
];

function App() {
  const [tasks, setTasks] = useState([...todos]);

  function handleNewTask(task) {
    setTasks([...tasks, task]);
  }

  function handleClearTasks() {
    setTasks([]);
  }

  function handleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />
      <div className="app-body">
        <Form onNewTask={handleNewTask} />
        <View
          tasks={tasks}
          onClearTasks={handleClearTasks}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
