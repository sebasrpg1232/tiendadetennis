
function ActualizarStock() {
  return (
    <div class="vh-100" style={{ backgroundColor: "#eee" }}>
      <form class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-white bg-dark" style={{ borderRadius: "25px" }}>
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 text-center">
                    <div>
                      <p class="text-center h1 fw-bold mx-1 mx-md-4 mt-1 mb-3">Actualizar Producto</p>
                    </div>
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Seleccione el producto que desea actualizar
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Naiki</a></li>
                        <li><a class="dropdown-item" href="#">Mapupu</a></li>
                        <li><a class="dropdown-item" href="#">Adidos</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>




  );
}

export default ActualizarStock