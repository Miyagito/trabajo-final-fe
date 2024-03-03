import React, { useEffect, useState } from "react";
import "./header.css";

export const Header = ({ showAdminForm }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdminMood = () => {
    setIsAdmin(!isAdmin);
  };

  useEffect(() => {
    showAdminForm(isAdmin);
  }, [isAdmin]);

  return (
    <header className="header">
      <h2>Productos Disponibles</h2>
      <section className="btn-group" role="group" aria-label="Admin options">
        <button
          className="btn btn-outline-success btn-sm"
          onClick={toggleAdminMood}
        >
          Activar Modo Admin
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={toggleAdminMood}
        >
          Desactivar Modo Admin
        </button>
      </section>
    </header>
  );
};
