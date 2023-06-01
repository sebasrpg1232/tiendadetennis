function Login() {
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
                                            <p class="text-center h1 fw-bold mx-1 mx-md-4 mt-1 mb-5">Ingresar</p>
                                        </div>
                                        <form>

                                            <div class="form-outline mb-4">
                                                <input type="email" id="form2Example1" class="form-control" />
                                                <label class="form-label mt-2" for="form2Example1">Dirección E-mail</label>
                                            </div>


                                            <div class="form-outline mb-4">
                                                <input type="password" id="form2Example2" class="form-control" />
                                                <label class="form-label mt-2" for="form2Example2">Contraseña</label>
                                            </div>


                                            <div class="row mb-4">
                                                <div class="col d-flex justify-content-center">

                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                                        <label class="form-check-label" for="form2Example31"> Recuérdame </label>
                                                    </div>
                                                </div>

                                                <div class="col">

                                                    <a href="#!" class="text-light">¿Olvidaste tu contraseña?</a>
                                                </div>
                                            </div>


                                            <button type="button" class="btn btn-light btn-block mb-4">Entrar</button>


                                            <div class="text-center">
                                                <p>¿No tienes cuenta aún?  <a href="#!" class="text-light">Registrate</a></p>
                                                <p>otras opciones de inicio de sesión:</p>
                                                
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login