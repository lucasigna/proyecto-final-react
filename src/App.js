//import logo from './logo.svg';
import './App.scss';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Filters } from "./components/Filters/Filters";

function App() {
  return (
    <>
      <NavBar/>
      <div className="main">
        <Filters/>
        <ItemListContainer/>
      </div>
    </>
  );
}

export default App;
