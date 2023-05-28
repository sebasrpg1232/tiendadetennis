import axios from "axios";

function VerCatalogo(props) {
  let resultado = props;

  return (
    <table class="table" id="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Referencia</th>
            <th scope="col">Color</th>
            <th scope="col">Talla</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          { 
          <div>
            <th scope="row">1</th>
            <td>{resultado.referencia}</td>
            <td>{resultado.color}</td>
            <td>{resultado.talla}</td>
            <td>{resultado.precio}</td>
            <button type="button" class="btn btn-secondary">
              Secondary
            </button>
          </div>
          // <span class="badge bg-danger"> {validationMessages[0]}</span>
          
          }
        </tbody>
      </table>
    );
  }


export default VerCatalogo;
