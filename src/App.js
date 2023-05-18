import "./App.css";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import CrearProducto from "./Components/CrearProducto/CrearProducto";
import VerTenis from "./Components/VerTenis/VerTenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActualizarStock from "./Components/ActualizarStock/ActualizarStock"
function App() {
  return (
    <div className="App">
      <nav>
        <Router>
          <Menu/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route> 
              <Route path="/CrearProducto" element={<CrearProducto/>}></Route>
              <Route path="/VerTenis" element={<VerTenis/>}></Route>
              <Route path="/ActualizarStock" element={<ActualizarStock/>}></Route>
            </Routes>
        </Router>
      </nav>
      {/* <Tarjetas
      img = "1"
      titulo = "Tenis Forum Exhibit Low"
      precio = "$499.950"
      detalle = "Tenis clásicos inspirados en el básquet con un look a cuadros."
      /> */}
    </div>
  );
}
 
export default App;
