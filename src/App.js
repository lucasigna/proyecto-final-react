import './App.scss';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Filters } from "./components/Filters/Filters";
import { useState } from "react";
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';

function App() {

  // Estado de theme
  const [theme, setTheme] = useState(true);

  //Función para cambiar de theme
  const handleTheme = (e) => {
    setTheme(!theme);
  };

  return (
    <BrowserRouter>

      <NavBar theme={theme} handleTheme={handleTheme}/>

      <Switch>
        <Route exact path="/">
          <main className={theme ? 'main mainLight' : 'main mainDark'}>
            <Filters theme={theme}/>
            <ItemListContainer theme={theme}/>
          </main>
        </Route>
        <Route exact path="/productos/:itemId">
          <ItemDetailContainer theme={theme}/>
        </Route>
        <Route exact path="/carrito">
          <Cart theme={theme}/>
        </Route>
        <Route path="*">
            <Redirect to="/"/>
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
