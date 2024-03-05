import React, { useState } from "react";
import "./header.css";

export const Header = ({ toggleAdminMode, isAdmin }) => {
  const [error, setError] = useState("");
  const adminPassword = "admin";

  const handleAdminButtonClick = () => {
    if (isAdmin) {
      toggleAdminMode();
    } else {
      const enteredPassword = prompt(
        "Por favor, ingresa el password de admin:"
      );
      if (enteredPassword === adminPassword) {
        toggleAdminMode();
        setError("");
      } else {
        setError("Password incorrecto. Acceso denegado.");
      }
    }
  };

  return (
    <header className="header">
      <h2>Productos Disponibles</h2>
      <section className="btn-group" role="group" aria-label="Admin options">
        {isAdmin ? (
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={toggleAdminMode}
          >
            Desactivar Modo Admin
          </button>
        ) : (
          <button
            className="btn btn-outline-success btn-sm"
            onClick={handleAdminButtonClick}
          >
            Activar Modo Admin
          </button>
        )}
      </section>
      {error && <p className="text-danger">{error}</p>}{" "}
    </header>
  );
};
