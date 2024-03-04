import React, { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import mockedData from "./mockedData/mockedData.json";
import { CategoryAccordion } from "./components/categoryAccordion/CategoryAccordion";
import { ShoppingCart } from "./components/shoppingCart/ShoppingCart";
import { AdminForm } from "./components/adminForm/AdminForm";
import "./app.css";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [shoppyCartList, setShoppyCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [catAndProdsList, setCatAndProdsList] = useState(mockedData);

  useEffect(() => {
    const newTotal = shoppyCartList.reduce((sum, product) => {
      return sum + product.precio * product.cantidad;
    }, 0);
    setTotalPrice(Math.round(newTotal * 100) / 100);
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

  const toggleAdminMode = () => setIsAdmin(!isAdmin);

  const addCategoria = (nuevaCategoria) => {
    if (typeof nuevaCategoria === "string") {
      // Si es una cadena simple, agregamos la categoría sin productos
      setCatAndProdsList((prevState) => ({
        ...prevState,
        categorias: [
          ...prevState.categorias,
          { nombre: nuevaCategoria, productos: [] },
        ],
      }));
    } else {
      // Si es un objeto con productos, simplemente lo agregamos
      setCatAndProdsList((prevState) => ({
        ...prevState,
        categorias: [...prevState.categorias, nuevaCategoria],
      }));
    }
  };

  const addProductoToCategoria = (categoria, nuevoProducto) => {
    setCatAndProdsList((prevState) => {
      const newCategorias = prevState.categorias.map((cat) => {
        if (cat.nombre === categoria) {
          return {
            ...cat,
            productos: [...cat.productos, nuevoProducto],
          };
        }
        return cat;
      });
      return { ...prevState, categorias: newCategorias };
    });
  };

  return (
    <div className="main-container">
      <section className="left-section">
        <Header toggleAdminMode={toggleAdminMode} isAdmin={isAdmin} />
        {isAdmin ? (
          <AdminForm
            categorias={catAndProdsList.categorias.map((cat) => cat.nombre)}
            addCategoria={addCategoria}
            addProductoToCategoria={addProductoToCategoria}
          />
        ) : (
          <CategoryAccordion
            categories={catAndProdsList.categorias}
            addProductToCart={addProductToCart}
          />
        )}
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
