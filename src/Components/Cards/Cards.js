
function Cards(props){
    return(
    <div class="card" style={{width:"18rem"}}>
        <img class="card-img-top" src ={require(`../Images/card_${props.image}`)} alt={props.altImg}/>
        <div class="card-body">
    <h5 class="card-title">{props.titulo}</h5>
    <p class="card-text">{props.texto}</p>
    <a href="#" class="btn btn-primary">Ver tennis</a>
  </div>
    </div>);
}
export default Cards