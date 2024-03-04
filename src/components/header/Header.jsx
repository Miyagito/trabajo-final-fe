import React from "react";
import "./header.css";

export const Header = ({ toggleAdminMode, isAdmin }) => {
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
            onClick={toggleAdminMode}
          >
            Activar Modo Admin
          </button>
        )}
      </section>
    </header>
  );
};
