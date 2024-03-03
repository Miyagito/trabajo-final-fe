import React from "react";
import { Button } from "../buttons/Button";
import "./AccordionItem.css";

export const AccordionItem = ({
  itemId,
  title,
  children,
  expanded,
  setExpanded,
}) => {
  const isCurrentlyExpanded = expanded === itemId;

  const handleToggle = () => {
    setExpanded(isCurrentlyExpanded ? null : itemId);
  };

  let buttonMsg = "Agregar a la cesta";

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${itemId}`}>
        <button
          className={`accordion-button ${
            !isCurrentlyExpanded ? "collapsed" : ""
          }`}
          type="button"
          aria-expanded={isCurrentlyExpanded}
          aria-controls={`collapse${itemId}`}
          onClick={handleToggle}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${itemId}`}
        className={`accordion-collapse collapse ${
          isCurrentlyExpanded ? "show" : ""
        }`}
        aria-labelledby={`heading${itemId}`}
      >
        <div className="accordion-body">
          {children.map((producto, index) => (
            <div key={index}>
              <section>
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Stock: {producto.stock}</p>
              </section>
              <section>
                <img
                  src={producto.imagen}
                  alt={producto.descripcion}
                  style={{ width: "100px" }}
                />
                <Button children={buttonMsg} className={"btn btn-primary"} />
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
