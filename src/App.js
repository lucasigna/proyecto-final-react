import './App.scss';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Filters } from "./components/Filters/Filters";
import { useContext } from "react";
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { ThemeContext } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { AddCartAdvice } from './components/AddCartAdvice/AddCartAdvice';

function App() {

  const {theme} = useContext(ThemeContext)

  return (

    <CartProvider>
      <BrowserRouter>

        <NavBar/>

        <Switch>
          <Route exact path="/">
            <main className={theme ? 'main mainLight' : 'main mainDark'}>
              <Filters/>
              <ItemListContainer/>
            </main>
          </Route>
          <Route exact path="/productos/:itemId">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/carrito">
            <Cart/>
          </Route>
          <Route path="*">
              <Redirect to="/"/>
          </Route>

        </Switch>

        <AddCartAdvice/>

        </BrowserRouter>
    </CartProvider>

  );
}

export default App;
