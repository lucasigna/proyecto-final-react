//import logo from './logo.svg';
import './App.scss';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
     <NavBar/>
     <ItemListContainer greeting="Gracias por confiar en nosotros"/>
    </>
  );
}

export default App;
