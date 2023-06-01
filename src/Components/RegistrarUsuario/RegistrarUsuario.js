import { useState } from "react";
import axios from "axios";


const spanStyle = {
  width: "12em",
};
  
function RegistrarUsuario() {
  const [correo, setCorreo] = useState();
  const [pass, setPass] = useState();

  const createProduct = (e) => {
    e.preventDefault();
    if (correo !== "" && pass !== null) {
      axios
        .post("http://localhost:3002/registrar", {
          correo: correo,
          pass: pass,
        })
        .then(() => {
          alert("Usuario Registrado");
          limpiarCampos();
        });
    }
  };


const limpiarCampos = () => {
    setCorreo("");
    setPass("");

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
                      Registrarse
                    </p>
                    <div class="input-group flex-nowrap mb-2">
                      <span
                        class="input-group-text"
                        style={spanStyle}
                        id="addon-wrapping"
                      >
                        Correo Electrónico
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ingrese su correo"
                        id="correo"
                        name="correo"
                        onChange={(event)=>{
                          setCorreo(event.target.value)
                        }}
                      ></input>
                    </div>
                    <div class="input-group flex-nowrap mb-2">
                      <span
                        class="input-group-text"
                        style={spanStyle}
                        id="addon-wrapping"
                      >
                        Contraseña
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Ingrese su contraseña"
                        id="pass"
                        name="pass"
                        onChange={(event)=>{
                          setPass(event.target.value)
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
export default RegistrarUsuario;
