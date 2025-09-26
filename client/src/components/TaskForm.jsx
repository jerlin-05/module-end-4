import React, { useState } from "react";

const TaskForm = ({ onSubmit, initial = {} }) => {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    onSubmit({ title: title.trim(), description: description.trim() });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: "1rem" }}>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "0.5rem", width: "60%", marginRight: "0.5rem" }}
      />
      <input
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "0.5rem", width: "30%", marginRight: "0.5rem" }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
