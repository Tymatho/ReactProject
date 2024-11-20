import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importer la Navbar
import HomePage from './pages/HomePage';
import AddTaskPage from './pages/AddTaskPage';
import TaskDetailsPage from './pages/TaskDetailsPage';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete React project", description: "Finish the task manager app", completed: false },
    { id: 2, title: "Write documentation", description: "Create a README file", completed: true },
    { id: 3, title: "Test the app", description: "Ensure all features work", completed: false },
  ]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />}
        />
        <Route path="/add" element={<AddTaskPage addTask={addTask} />} />
        <Route path="/task/:id" element={<TaskDetailsPage tasks={tasks} />} />
      </Routes>
    </Router>
  );
};

export default App;