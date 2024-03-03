import { useEffect } from "react";
import { Header } from "./components/header/Header";

function App() {
  const showAdminForm = (isAdmin) => isAdmin;

  return <Header showAdminForm={showAdminForm} />;
}

export default App;
