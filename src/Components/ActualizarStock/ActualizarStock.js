const spanStyle = {
    width: "12em",
  };
function ActualizarStock(){
return(
    <div>
        <span class="input-group-text" style={spanStyle} id="addon-wrapping">
            Precio del tenis
          </span>
          <select  name="producto" id="productos">
    <option value="guayo">guayo</option>
    <option value="adidas">adidas</option>
    <option value="nike">nike</option>
    <option value="vans">vans</option>
  </select>
    </div>
);
}

export default ActualizarStock