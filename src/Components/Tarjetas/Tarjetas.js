function Tarjetas (props){
    return(
        <div>
            <div>
                <img className="estiloImg"
                src = {require (`../../Imagenes/tarjeta${props.img}.jpg`)}
                alt = "Imagen Zapato"
                />
                <h2>{props.titulo}</h2>
                <p>{props.precio}</p>
                <p>{props.detalle}</p>
            </div>
        </div>
    )
}

export default Tarjetas;