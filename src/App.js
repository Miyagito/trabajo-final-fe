import { Header } from "./components/header/Header";
import mockedData from "./mockedData/mockedData.json";

import { CategoryAccordion } from "./components/categoryAccordion/CategoryAccordion";

function App() {
  const showAdminForm = (isAdmin) => isAdmin;

  return (
    <>
      <Header showAdminForm={showAdminForm} />
      <CategoryAccordion categories={mockedData.categorias} />
    </>
  );
}

export default App;
