import React, { useState } from "react";
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const  
 login = async (event: React.FormEvent) => {
    event.preventDefault();  


    try {
      const response = await axios.post('http://127.0.0.1:5000/api/login', { email, password });
      const data = response.data;

      // Handle login success (e.g., store token, redirect to another page)
      console.log('Login successful:', data);

      // Assuming the API returns an access token in the response data
      localStorage.setItem('accessToken', data.access_token);
      // Redirect to a protected page
      window.location.href = '/protected';
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error.response?.data?.message || 'Unknown error');

      // Display an error message to the user
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-2xl font-bold text-center">Inicia sesión</h1>
        <form className="space-y-6" onSubmit={login}>
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
