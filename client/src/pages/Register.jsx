import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h2>Register</h2>
      <form onSubmit={submit}>
        <div><input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required /></div>
        <div><input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required /></div>
        <div><input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required /></div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
