import { atom, selector } from "recoil";
import { catAndProdsListAtom } from "./catAndProdsListAtom";

export const productsStockAtom = atom({
  key: "productsStock",
  default: selector({
    key: "productsStockDefault",
    get: ({ get }) => {
      const catAndProdsList = get(catAndProdsListAtom);
      return catAndProdsList.categorias
        .flatMap((categoria) =>
          categoria.productos.map((producto) => ({
            [producto.codigo]: producto.stock,
          }))
        )
        .reduce((acc, val) => ({ ...acc, ...val }), {});
    },
  }),
});
