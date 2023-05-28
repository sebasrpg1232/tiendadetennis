import axios from "axios";
import { useState } from "react";
async function Cards(props){
  const [resultado, setResultado] = useState([]);
  const [sw, setSw] = useState(false);

  
    
  /*  await axios.get("http://localhost:3002/image", {
      params: {
        "imagen": props.img
      }
    }).then((response) => {
      setResultado(response.data);
    });
    setSw(true);
  
*/
    return(
  //   <div class="card bg-dark text-light" style={{width:"18rem"}}>
  //       <img class="card-img-top" src ={require(`../../Imagenes/tarjeta${props.img}.jpg`)} alt={props.altImg}/> 
  //       <div class="card-body">
  //   <h5 class="card-title">{props.titulo}</h5>
  //   <p class="card-text">{props.precio}</p>
  //   <a href="#" class="btn btn-light">Ver Referencia</a>
  // </div>
  //   </div>
  

  <div class="text-light card mb-3 ms-3 bg-dark" style={{maxWidth: '540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
    {/* sw&& resultado.map( (vm)=>{
      <img class="img-fluid rounded-start"src ={require(`../../Imagenes/${vm.url}.jpg`)} alt={props.altImg}/>
})*/}
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.titulo}</h5>
        <p class="card-text">{props.precio}</p>
        <a href="#" class="btn btn-light">Ver Referencia</a>
      </div>
    </div>
  </div>
</div>
  
  
  
  
  
  );
}
export default Cards