import React, { useEffect, useState } from "react";
import API from "../api/axios";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      alert("Could not fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (payload) => {
    try {
      const res = await API.post("/tasks", payload);
      setTasks(prev => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
      alert("Add task failed");
    }
  };

  const toggleComplete = async (task) => {
    try {
      const res = await API.put(`/tasks/${task._id}`, { completed: !task.completed });
      setTasks(prev => prev.map(t => t._id === res.data._id ? res.data : t));
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  const deleteTask = async (id) => {
    if (!confirm("Delete this task?")) return;
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "1rem auto" }}>
      <h2>Dashboard</h2>
      <TaskForm onSubmit={addTask} />
      {loading ? <p>Loading...</p> : (
        tasks.length === 0 ? <p>No tasks yet.</p> :
        tasks.map(task => (
          <TaskItem key={task._id} task={task} onToggleComplete={toggleComplete} onDelete={deleteTask} />
        ))
      )}
    </div>
  );
};

export default Dashboard;
