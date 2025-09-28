import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div><input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required /></div>
        <div><input type="password" placeholder="Password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required /></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
