import React, { useState } from "react";

export const Formulario = () => {
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [codigo, setCodigo] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ categoria, descripcion, precio, stock, codigo, imagenUrl });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre de la categoría</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Nombre de la categoría"
        />
        <button type="button">Añadir Categoría</button>
      </div>
      <h3>Añadir Producto</h3>
      <div>
        <label>Categoría del producto</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {/* Aquí deberías insertar las opciones de categorías */}
          <option value="Electrónica">Electrónica</option>
          {/* ... otras opciones */}
        </select>
      </div>
      <div>
        <label>Descripción del producto</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción del producto"
        />
      </div>
      <div>
        <label>Precio del producto</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio del producto"
        />
      </div>
      <div>
        <label>Stock del producto</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock del producto"
        />
      </div>
      <div>
        <label>Código del producto</label>
        <input
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          placeholder="Código del producto"
        />
      </div>
      <div>
        <label>URL de la imagen del producto</label>
        <input
          type="text"
          value={imagenUrl}
          onChange={(e) => setImagenUrl(e.target.value)}
          placeholder="URL de la imagen del producto"
        />
      </div>
      <button type="submit">Añadir Producto</button>
    </form>
  );
};
