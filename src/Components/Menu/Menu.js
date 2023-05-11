import React from "react";
import { Link } from "react-router-dom";
function Menu(){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tienda de tennis</a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/" class="nav-link">Inicio</Link>
        </li>
        <li class="nav-item">
          <Link to="/CrearProducto" class="nav-link">CrearProducto</Link>
        </li>
        <li class="nav-item">
        <Link to="/VerTenis" class="nav-link">Ver Tenis</Link>
        </li>
        <li class="nav-item">
        <Link to="/ActualizarStock" class="nav-link">Actualizar Stock</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Menu;