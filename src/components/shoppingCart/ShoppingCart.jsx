import React from "react";
import { Button } from "../buttons/Button";
import "./shoppingCart.css";

export const ShoppingCart = ({
  totalPrice,
  shoppyCartList,
  takeOffProductToCart,
}) => {
  return (
    <>
      <h2>Cesta de la Compra</h2>
      <section className="list-group"></section>
      {shoppyCartList ? (
        shoppyCartList.map((shoppyCartItem, index) => {
          return (
            <div key={index} className="shoppyCartItem">
              <section>
                <p>{shoppyCartItem.descripcion}</p>
                <p>Precio: ${shoppyCartItem.precio}</p>
                <p>Cantidad: {shoppyCartItem.cantidad}</p>
                <Button
                  className="btn-warning"
                  onClick={() => takeOffProductToCart(shoppyCartItem.codigo)}
                >
                  Eliminar de la cesta
                </Button>
              </section>
              <section>
                <img
                  src={shoppyCartItem.imagen}
                  alt={shoppyCartItem.descripcion}
                  style={{ width: "100px" }}
                />
              </section>
            </div>
          );
        })
      ) : (
        <h4>No hay productos seleccionados</h4>
      )}
      <h4>Total de la compra:{totalPrice}$</h4>
      <Button children={"Realizar pedido"} className={"btn-primary mt-3"} />
    </>
  );
};
