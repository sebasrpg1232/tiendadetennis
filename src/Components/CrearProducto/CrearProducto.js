function CrearProducto() {
  return (
    <div class=".container-sm">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          Nombre de la Referencia
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Referencia"
        ></input>
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          Color del Tenis
        </span>
        <input type="text" class="form-control" placeholder="Color"></input>
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          Talla del tenis
        </span>
        <input
          type="number"
          class="form-control"
          placeholder="talla"
        ></input>
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          Precio del tenis
        </span>
        <input
          type="number"
          class="form-control"
          placeholder="Precio"
        ></input>
      </div>
    </div>
  );
}
export default CrearProducto;
