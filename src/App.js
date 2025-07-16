import React, { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

function App() {
  // Load tasks from localStorage or start with empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all");
  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // Add a new task
  const addTask = (text, priority = "medium") => {
    const newTask = {
      id: uuidv4(),
      text,
      completed: false,
      priority,
    };
    setTasks([...tasks, newTask]);
  };
  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Filter tasks based on current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });
  const taskCount = {
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
  };
  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  return (
    <div className="todo-app">
      <h1>React To-Do App</h1>
      <TaskForm onAddTask={addTask} />
      <FilterButtons
        currentFilter={filter}
        onFilterChange={setFilter}
        taskCount={taskCount}
      />
      {tasks.some((task) => task.completed) && (
        <button className="clear-completed" onClick={clearCompleted}>
          Clear Completed
        </button>
      )}
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
