import { IProducto } from "../";

const spanStyle = {
  width: "12em",
};

function CrearProducto() {
  return (
    <div class="container-sm">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" style={spanStyle} id="addon-wrapping">
          Nombre de la Referencia
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Referencia"
          id="referencia"
        ></input>
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" style={spanStyle} id="addon-wrapping">
          Color del Tenis
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Color"
          id="color"
        ></input>
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" style={spanStyle} id="addon-wrapping">
          Talla del tenis
        </span>
        <input
          type="number"
          class="form-control"
          placeholder="talla"
          id="talla"
        ></input>
      </div>
      <div class="input-group flex-nowrap">
        <span class="input-group-text" style={spanStyle} id="addon-wrapping">
          Precio del tenis
        </span>
        <input
          type="number"
          class="form-control"
          placeholder="Precio"
          id="precio"
        ></input>
      </div>
    </div>
  );
}

function validar(props) {
  var r = (/[^a-zA-Z]+/g, '');
  if(props.referencia=="" || props.referencia==null || props.referencia.match(r) ){

  }
}

function saveProduct() {
  validar(
    new IProducto(
      document.getElementById("referencia").value,
      document.getElementById("color").value,
      parseFloat(document.getElementById("talla").value),
      parseFloat(document.getElementById("precio").value)
    )
  );
}

export default CrearProducto;
