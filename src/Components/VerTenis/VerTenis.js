import axios from "axios";
import { useState } from "react";

// const [table, setTable] = useState([]);
// const [tableData, setTableData] = useState({});
// const handleChange = ({ target }) => {
//   setTableData({ ...tableData, [target.name]: target.value });
// }

// const handleClick = (evt) => {
//   fillTable();
//   if (table.length > 0) {
//       evt.preventDefault();
//   }
// }

// const fillTable = () => {
//   const { referencia, color, talla, precio } = tableData;
//   setTable([]);
//   let referencias = [];
//   let colores = [];
//   let tallas = [];
//   let precios = [];
//   if (referencia) {
//       referencias.push(referencia);
//   }
//   if (!color) {
//       messages.push("color is required");
//   }
//   if(!talla){
//     messages.push("talla is required")
//   }
//   if(!precio){
//     messages.push("precio is required")
//   }
//   setValidationMessages(messages);
// }

function VerTenis() {
  const [resultado, setResultado] = useState([]);
  const [sw, setSw] = useState(false);

  const handleClick = (evt)=> {
    evt.preventDefault();
    axios.get("http://localhost:3002/products").then((response) => {
      setResultado(response.data);
    });
    setSw(true);
  };


  return (
    <div>
      <table class="table" id="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nombre Referencia</th>
            <th scope="col">Color</th>
            <th scope="col">Talla</th>
            <th scope="col">Precio</th>
            <th scope="col">Ver Producto</th>
            <th scope="col">Eliminar Producto</th>
            <th><button onClick={handleClick} class="btn">
        <span class="material-symbols-outlined">refresh</span>
      </button>
      </th>
          </tr>
        </thead>
        <tbody>
          {sw != false &&
            resultado.map((vm) => (
              <tr>
                <th scope="row">{}</th>
                <td key={vm}>{vm.referencia}</td>
                <td key={vm}>{vm.color}</td>
                <td key={vm}>{vm.talla}</td>
                <td key={vm}>{vm.precio}</td>
                <td>
                  <button type="button" class="btn">
                    <span class="material-symbols-outlined">stylus</span>
                  </button>
                </td>
                <td>
                  <button type="button" class="btn">
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default VerTenis;
