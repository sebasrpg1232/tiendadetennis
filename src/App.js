import "./App.css";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import CrearProducto from "./Components/CrearProducto/CrearProducto";
import VerTenis from "./Components/VerTenis/VerTenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ActualizarStock from "./Components/ActualizarStock/ActualizarStock"
function App() {
  // fetch('http://localhost:9000/api/product/list')
  // .then(response => response.json())
  // .then(data=> console.log(data));
  
  
  return (
    <div className="App">
      <nav>
        <Router>
          <Menu/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route> 
              <Route path="/CrearProducto" element={<CrearProducto/>}></Route>
              <Route path="/VerTenis" element={<VerTenis/>}></Route>
              <Route path="/Login" element= {<Login/>}></Route>
      
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
