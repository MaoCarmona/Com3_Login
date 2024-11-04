// src/components/Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./Login.css"; // Importar los estilos
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      // Redirige al dashboard
      navigate("/dashboard"); // Usa navigate para redirigir
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-box">
      <input type="checkbox" className="input-check" />
      <div className="login-light"></div>
      <div className="light"></div>
      
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-box">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
          <span className="input-line"></span>
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
          <span className="input-line"></span>
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* <div className="register-link">
          <p>
            Don’t have an account? <a href="/">Register</a>
          </p>
        </div> */}
      </form>
    </div>
  );
}

export default Login;
