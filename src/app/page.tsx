"use client";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChatInterface from "./interfaces/ChatInterface";
import RegisterPage from './interfaces/Register';
import LoginPage from "./interfaces/Login";

function Layout() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/6130a9118b1be9aebe2c2837/66cecb2b26ba94a7a226d210_Secure-message-phish_-Login-to-get-scammed.webp')" }}
    >
      <div className="hero-overlay bg-blue-600 bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div className="avatar">
            <div className="w-24">
              <img src="https://cdn-icons-png.flaticon.com/512/9374/9374926.png" />
            </div>
          </div>
          <h1 className="mb-5 text-5xl font-bold text-white">¡Bienvenido!</h1>
          <p className="mb-5 text-lg font-bold text-white">
            Empieza a mensajear de manera segura
          </p>
          <div className="flex flex-col space-y-4">
            <Link to="/login" className="btn btn-primary text-white">Iniciar sesión</Link>
            <Link to="/register" className="btn btn-secondary">Registrarse</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
