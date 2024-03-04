import React, { useEffect, useState } from "react";
import { Button } from "../buttons/Button";
import "./accordionItem.css";
import { useRecoilState } from "recoil";
import { productsStockAtom } from "../../states/stockAtoms";

export const AccordionItem = ({
  itemId,
  title,
  productos,
  expanded,
  setExpanded,
  addProductToCart,
}) => {
  const [productsStock, setProductsStock] = useRecoilState(productsStockAtom);

  const isCurrentlyExpanded = expanded === itemId;
  const handleToggle = () => {
    const content = document.getElementById(`collapse${itemId}`);
    if (isCurrentlyExpanded) {
      // Colapsar
      content.style.maxHeight = "0";
    } else {
      // Expandir - Se necesita calcular después de que el navegador tenga la oportunidad de renderizar el cambio
      requestAnimationFrame(() => {
        content.style.maxHeight = content.scrollHeight + "px";
      });
    }
    setExpanded(isCurrentlyExpanded ? null : itemId);
  };

  const handleUpdateStock = (codigo, decreaseBy) => {
    setProductsStock((prevStock) => {
      const currentStock = prevStock[codigo] || 0;
      return {
        ...prevStock,
        [codigo]:
          currentStock - decreaseBy >= 0 ? currentStock - decreaseBy : 0,
      };
    });
  };

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
        data-parent="#categorias"
      >
        <div className="accordion-body">
          {productos.map((producto, index) => (
            <div key={index}>
              <section>
                <p>{producto.descripcion}</p>
                <p>Precio: ${producto.precio}</p>
                <p>Stock: {productsStock[producto.codigo]}</p>
                <p>Código: {producto.codigo}</p>
              </section>
              <section>
                <img
                  src={producto.imagen}
                  alt={producto.descripcion}
                  style={{ width: "100px" }}
                />
                <Button
                  className="btn btn-primary"
                  onClick={() => {
                    handleUpdateStock(producto.codigo, 1);
                    addProductToCart(producto);
                  }}
                  disabled={productsStock[producto.codigo] <= 0}
                >
                  Agregar a la cesta
                </Button>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
