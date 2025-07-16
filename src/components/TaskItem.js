function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`task-item ${task.completed ? "completed" : ""} priority-${
        task.priority
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className="task-text">{task.text}</span>
      <span className="task-priority">{task.priority}</span>
      <button onClick={() => onDelete(task.id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
