import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #ddd" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>TaskManager</Link>
      {user ? (
        <>
          <span style={{ marginRight: "1rem" }}>Hello, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: "0.5rem" }}>Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
