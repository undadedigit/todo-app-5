import React from "react";

function FilterButtons({ currentFilter, onFilterChange, taskCount }) {
  return (
    <div className="filter-container">
      <div className="task-count">
        {taskCount.active} active, {taskCount.completed} completed
      </div>
      <div className="filter-buttons">
        <button
          className={currentFilter === "all" ? "active" : ""}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={currentFilter === "active" ? "active" : ""}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          className={currentFilter === "completed" ? "active" : ""}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default FilterButtons;
