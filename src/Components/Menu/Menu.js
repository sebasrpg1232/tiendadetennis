import React from "react";

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
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Crear Producto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Ver Tennis</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Actualizar Stock</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Menu;