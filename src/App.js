import React, { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import mockedData from "./mockedData/mockedData.json";
import { CategoryAccordion } from "./components/categoryAccordion/CategoryAccordion";
import { ShoppingCart } from "./components/shoppingCart/ShoppingCart";
import "./app.css";

function App() {
  const showAdminForm = (isAdmin) => isAdmin;
  const [shoppyCartList, setShoppyCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calcular el precio total cada vez que shoppyCartList cambia.
    const newTotal = shoppyCartList.reduce((sum, product) => {
      return sum + product.precio * product.cantidad;
    }, 0);
    setTotalPrice(Math.round(newTotal * 100) / 100); // Redondea a dos decimales
  }, [shoppyCartList]);

  const addProductToCart = (productToAdd) => {
    setShoppyCartList((currentItems) => {
      const existingProduct = currentItems.find(
        (item) => item.codigo === productToAdd.codigo
      );
      if (existingProduct) {
        return currentItems.map((item) =>
          item.codigo === productToAdd.codigo
            ? { ...item, cantidad: (item.cantidad || 0) + 1 }
            : item
        );
      }
      return [...currentItems, { ...productToAdd, cantidad: 1 }];
    });
  };

  const takeOffProductToCart = (codigo) => {
    setShoppyCartList((currentItems) => {
      const existingProduct = currentItems.find(
        (item) => item.codigo === codigo
      );
      if (existingProduct && existingProduct.cantidad > 1) {
        return currentItems.map((item) =>
          item.codigo === codigo
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        );
      } else {
        return currentItems.filter((item) => item.codigo !== codigo);
      }
    });
  };

  return (
    <div className="main-container">
      <section className="left-section">
        <Header showAdminForm={showAdminForm} />
        <CategoryAccordion
          categories={mockedData.categorias}
          addProductToCart={addProductToCart}
        />
      </section>
      <section className="right-section">
        <ShoppingCart
          totalPrice={totalPrice}
          takeOffProductToCart={takeOffProductToCart}
          shoppyCartList={shoppyCartList}
        />
      </section>
    </div>
  );
}

export default App;
