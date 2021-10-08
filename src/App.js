import './App.scss';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Filters } from "./components/Filters/Filters";
import { useState } from "react";

function App() {

  // Estado de theme
  const [theme, setTheme] = useState(true);

  //Función para cambiar de theme
  const handleTheme = (e) => {
    setTheme(!theme);
  };

  return (
    <>
      <NavBar theme={theme} handleTheme={handleTheme}/>
      <main className={theme ? 'main mainLight' : 'main mainDark'}>
        <Filters theme={theme}/>
        <ItemListContainer theme={theme}/>
      </main>
    </>
  );
}

export default App;
