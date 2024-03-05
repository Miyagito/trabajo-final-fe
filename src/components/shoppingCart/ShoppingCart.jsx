import React, { useState } from "react";
import { Button } from "../buttons/Button";
import "./shoppingCart.css";
import { useSetRecoilState } from "recoil";
import { productsStockAtom } from "../../states/stockAtoms";
import { Modal } from "react-bootstrap";

export const ShoppingCart = ({
  totalPrice,
  shoppyCartList,
  takeOffProductToCart,
  setShoppyCartList,
}) => {
  const setProductsStock = useSetRecoilState(productsStockAtom);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const processPurchase = () => setShowSuccessModal(true);

  const closeModal = () => {
    setShoppyCartList([]);
    setShowSuccessModal(false);
  };

  const handleUpdateStock = (productCode) => {
    setProductsStock((prevStock) => ({
      ...prevStock,
      [productCode]: (prevStock[productCode] || 0) + 1,
    }));
  };

  return (
    <>
      <h2>Cesta de la Compra</h2>
      <section className="list-group"></section>
      {shoppyCartList.length > 0 ? (
        shoppyCartList.map((shoppyCartItem, index) => (
          <div key={index} className="shoppyCartItem">
            <section>
              <p>{shoppyCartItem.descripcion}</p>
              <p>Precio: ${shoppyCartItem.precio}</p>
              <p>Cantidad: {shoppyCartItem.cantidad}</p>
              <Button
                className="btn-warning"
                onClick={() => {
                  handleUpdateStock(shoppyCartItem.codigo);
                  takeOffProductToCart(shoppyCartItem.codigo);
                }}
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
        ))
      ) : (
        <h4>No hay productos seleccionados</h4>
      )}
      <h4>Total de la compra: ${totalPrice}</h4>
      <Button
        onClick={processPurchase}
        className="btn-primary mt-3"
        disabled={shoppyCartList.length < 1}
      >
        Realizar pedido
      </Button>
      <Modal show={showSuccessModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Compra exitosa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu compra ha sido procesada con éxito.</Modal.Body>
        <Modal.Footer>
          <Button className="btn-secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
