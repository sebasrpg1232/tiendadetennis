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
            messages.push("referencia is required");
        }
        if (!color) {
            messages.push("color is required");
        }
        if(!talla){
          messages.push("talla is required")
        }
        if(!precio){
          messages.push("precio is required")
        }
        setValidationMessages(messages);
      }
    return (
      <div class="container-sm">
      <form >
        <div class="input-group flex-nowrap">
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
        <div class="input-group flex-nowrap">
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
        <div class="input-group flex-nowrap">
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
        <div class="input-group flex-nowrap">
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
        <button type="button" onClick={handleClick}>Save</button>
      </form>
      <div>{validationMessages.length > 0 && <span>Validation Summary</span>}
                <ul>
                  <span class="text-danger">
                  {validationMessages.map(vm => <li key={vm}>{vm}</li>)}
                  </span>
                </ul>
            </div>
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
