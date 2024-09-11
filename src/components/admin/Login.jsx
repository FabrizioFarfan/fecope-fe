import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        if (response.status === 403) {
          setIsSubmitting(false);
          setAuthError("Email o password sbagliata");
        } else {
          setIsSubmitting(false);
          setAuthError("C'è stato un errore. Per favore, riprova più tardi.");
        }
        return;
      }

      const data = await response.json();
      console.log("JWT Token:", data.token);
      const token = data.token;
      localStorage.setItem("token", token);
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 24);
      localStorage.setItem("expiration", expiration.toISOString());
      navigate("/admin");
    } catch (error) {
      console.error("Error during authentication:", error);
      setIsSubmitting(false);
      setAuthError("Error en la red. Por favor, inténtalo de nuevo más tarde.");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-3 px-10 text-true-white rounded-lg bg-true-red shadow-xl">
        <h2 className="text-3xl font-semibold italic text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-light mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Escribe el username"
              className="w-full px-3 py-2 border rounded-lg text-dark-red focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-light mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe la password"
              className="w-full px-3 py-2 border rounded-lg text-dark-red focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {authError && (
            <div className="mt-2 text-sm text-red-600 text-center">
              {authError}
            </div>
          )}
          <div
            className={`flex items-center justify-between  mx-20 rounded-3xl mt-4`}
          >
            <button
              type="submit"
              className="w-full font-semibold py-2 px-4 border-2 rounded-lg hover:bg-true-white hover:text-true-red"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Entrando..." : "Entra"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
