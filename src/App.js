import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Home from "./Components/Home/Home";
import CrearProducto from "./Components/CrearProducto/CrearProducto";
import VerTenis from "./Components/VerTenis/VerTenis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
              <Route path="/ActualizarStock" element={<CrearProducto/>}></Route>
            </Routes>
        </Router>
      </nav>
    </div>
  );
}

export default App;
