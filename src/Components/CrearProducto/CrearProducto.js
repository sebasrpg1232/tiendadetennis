// import { IProducto } from "../";
import { useState } from 'react';
function ValidateForm(props) {
  
    }

  const spanStyle = {
    width: "12em",
  };


  function CrearProducto(props) {
    const [validationMessages, setValidationMessages] = useState([]);
  const [formData, setFormData] = useState({});
  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  }

const handleClick = (evt) => {
        validateForm();
        if (validationMessages.length > 0) {
            evt.preventDefault();
        }  
        console.log({"refencia" : formData.refencia,"color": formData.color, "talla": formData.talla, "precio": formData.precio })
    }

    const validateForm = () => {
        const { referencia, color, talla, precio } = formData;
        setValidationMessages([]);
        let messages = [];
        if (!referencia) {
            messages.push("Referencia is required");
        }
        if (!color) {
            messages.push("Color is required");
        }
        if(!talla){
          messages.push("Talla is required")
        }
        if(!precio){
          messages.push("Precio is required")
        }
        setValidationMessages(messages);
      }
    return (
      <div class="vh-100" style={{backgroundColor: "#eee"}}>
      <form class="container h-100" >
      <div class="row d-flex justify-content-center align-items-center h-100" >
      <div class="col-lg-12 col-xl-11" >
        <div class="card text-white bg-dark" style={{borderRadius: "25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p class="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">Crear Producto</p>
        <div class="input-group flex-nowrap mb-2">
          <span class="input-group-text" style={spanStyle} id="addon-wrapping">
            Nombre de la Referencia
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Referencia"
            id="referencia"
            value={formData.referencia || ''} 
            onChange={handleChange}
            name="referencia"
          ></input>
        </div>
        <div>
          {validationMessages.length > 0 && <span class="badge bg-danger"> {validationMessages[0]}</span>}
          </div>
        <div class="input-group flex-nowrap mb-2">
          <span class="input-group-text" style={spanStyle} id="addon-wrapping">
            Color del Tenis
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Color"
            id="color"
            value={formData.color || ''} 
            onChange={handleChange}
            name="color"
          ></input>
        </div>
        <div>
          {validationMessages.length > 0 && <span class="badge bg-danger"> {validationMessages[1]}</span>}
          </div>
        <div class="input-group flex-nowrap mb-2">
          <span class="input-group-text" style={spanStyle} id="addon-wrapping">
            Talla del tenis
          </span>
          <input
            type="number"
            class="form-control"
            placeholder="talla"
            id="talla"
            value={formData.talla || ''} 
            onChange={handleChange}
            name="talla"
          ></input>
        </div>
        <div>
          {validationMessages.length > 0 && <span class="badge bg-danger"> {validationMessages[2]}</span>}
          </div>
        <div class="input-group flex-nowrap mb-2">
          <span class="input-group-text" style={spanStyle} id="addon-wrapping">
            Precio del tenis
          </span>
          <input
            type="number"
            class="form-control"
            placeholder="Precio"
            id="precio"
            value={formData.precio || ''} 
            onChange={handleChange}
            name="precio"
          ></input>
        </div>
        <div>
          {validationMessages.length > 0 && <span class="badge bg-danger"> {validationMessages[3]}</span>}
          </div>
        <button type="button" onClick={handleClick} class="btn btn-light">Guardar</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </form>
      {/* <div>{validationMessages.length > 0 && <span>Validation Summary</span>}
                
                  
                  
                  <h6>Errores de validacion: {validationMessages.map(vm => (<div>
                    <span class="badge bg-danger" key={vm}> {vm} </span>
                    </div>))}</h6> */}
                  
                  
                
            {/* </div> */}
            </div>
    );
  
}

  // function validar(props) {
  //   var r = (/[^a-zA-Z]+/g, '');
  //   if(props.referencia=="" || props.referencia==null || props.referencia.match(r) ){

  //   }
  // }

  // function saveProduct() {
  //   validar(
  //     new IProducto(
  //       document.getElementById("referencia").value,
  //       document.getElementById("color").value,
  //       parseFloat(document.getElementById("talla").value),
  //       parseFloat(document.getElementById("precio").value)
  //     )
  //   );
  // }

  export default CrearProducto;
