import { atom } from "recoil";
import mockedData from "../mockedData/mockedData.json";

export const catAndProdsListAtom = atom({
  key: "catAndProdsList",
  default: mockedData,
});
