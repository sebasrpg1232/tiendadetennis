
function Cards(props){
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
      <img class="img-fluid rounded-start"src ={require(`../../Imagenes/tarjeta${props.img}.jpg`)} alt={props.altImg}/>
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