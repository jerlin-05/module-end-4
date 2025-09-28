import React from "react";

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div style={{
      display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0.5rem",
      borderBottom: "1px solid #eee"
    }}>
      <div>
        <div style={{ fontWeight: "600", textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
        </div>
        {task.description && <div style={{ fontSize: "0.9rem", color: "#666" }}>{task.description}</div>}
      </div>
      <div>
        <button onClick={() => onToggleComplete(task)} style={{ marginRight: "0.5rem" }}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
