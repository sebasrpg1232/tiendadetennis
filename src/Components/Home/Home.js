import Cards from "../Cards/Cards";
import axios from "axios";
import { useState } from "react";

function Home() {
  const [resultado, setResultado] = useState([]);
  const [sw, setSw] = useState(false);
  const [referencia, setReferencia] = useState();
  const [precio, setPrecio] = useState();

  async function handleClick (evt) {
    evt.preventDefault();
    await axios.get("http://localhost:3002/products").then((response) => {
        console.log(response)
      setResultado(response.data);
    });
    setSw(true);
  };

  return (
    <div>
      <button onClick={handleClick} class="btn">
        <span class="material-symbols-outlined">refresh</span>
      </button>

      {sw != false &&
        resultado.map((vm) => (
          <div class="row">
            {
                <div>
                <Cards
              img={referencia}
              titulo={referencia}
              precio={precio}
        />
            </div>
            
            /**/}
          </div>
        ))}
    </div>
  );
}
export default Home;
