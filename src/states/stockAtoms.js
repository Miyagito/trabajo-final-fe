// stockAtoms.js
import { atom } from "recoil";
import mockedData from "../mockedData/mockedData.json";

// Crea un estado inicial para el stock basado en los productos
const initialStockState = mockedData.categorias
  .flatMap((categoria) =>
    categoria.productos.map((producto) => ({
      [producto.codigo]: producto.stock,
    }))
  )
  .reduce((acc, val) => ({ ...acc, ...val }), {});

export const productsStockAtom = atom({
  key: "productsStock",
  default: initialStockState,
});
