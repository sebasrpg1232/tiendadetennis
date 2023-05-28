import { useState } from "react";
import axios from "axios";

const spanStyle = {
  width: "12em",
};
  
function CrearProducto() {
  const [referencia, setReferencia] = useState();
  const [color, setColor] = useState();
  const [talla, setTalla] = useState();
  const [precio, setPrecio] = useState();

  const createProduct = (e) => {
    e.preventDefault();
    if (referencia !== "" && color !== "" && talla !== "" && precio !== null) {
      axios
        .post("http://localhost:3002/form", {
          referencia: referencia,
          color: color,
          talla: talla,
          precio: precio,
        })
        .then(() => {
          alert("Producto creado");
          limpiarCampos();
        });
    }
  };


const limpiarCampos = () => {
  setReferencia("");
  setColor("");
  setTalla("");
  setPrecio("");
};

  return (
    <div class="vh-100" style={{ backgroundColor: "#eee" }}>
      <form class="container h-100" method="post" action="">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div
              class="card text-white bg-dark"
              style={{ borderRadius: "25px" }}
            >
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                      Crear Producto
                    </p>
                    <div class="input-group flex-nowrap mb-2">
                      <span
                        class="input-group-text"
                        style={spanStyle}
                        id="addon-wrapping"
                      >
                        Nombre de la Referencia
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Referencia"
                        id="referencia"
                        name="referencia"
                        onChange={(event)=>{
                          setReferencia(event.target.value)
                        }}
                      ></input>
                    </div>
                    <div class="input-group flex-nowrap mb-2">
                      <span
                        class="input-group-text"
                        style={spanStyle}
                        id="addon-wrapping"
                      >
                        Color del Tenis
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Color"
                        id="color"
                        name="color"
                        onChange={(event)=>{
                          setColor(event.target.value)
                        }}
                      ></input>
                    </div>
                    <div class="input-group flex-nowrap mb-2">
                      <span
                        class="input-group-text"
                        style={spanStyle}
                        id="addon-wrapping"
                      >
                        Talla del tenis
                      </span>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="talla"
                        id="talla"
                        name="talla"
                        onChange={(event)=>{
                          setTalla(event.target.value)
                        }}
                      ></input>
                    </div>
                    <div class="input-group flex-nowrap mb-2">
                      <span
                        class="input-group-text"
                        style={spanStyle}
                        id="addon-wrapping"
                      >
                        Precio del tenis
                      </span>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Precio"
                        id="precio"
                        name="precio"
                        onChange={(event)=>{
                          setPrecio(event.target.value)
                        }}
                      ></input>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-light"
                      onClick={createProduct}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
     </div>
  );
}
export default CrearProducto;
