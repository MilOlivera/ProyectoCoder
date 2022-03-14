
let divClima = document.getElementById('divClima')


    fetch('https://api.openweathermap.org/data/2.5/weather?id=3427753&appid=d6fd459085f8888b4ed4a21a1f9c6179&lang=sp&units=metric')
    .then(respuesta => respuesta.json())
    .then(climaHoy => {
        let climaAhora = Object.entries(climaHoy).filter(tiempo => (tiempo[0] != "coord" && tiempo[0] != "base" && tiempo[0] != "visibility" && tiempo[0] != "wind" && tiempo[0] != "dt" && tiempo[0] != "sys" && tiempo[0] != "timezone" && tiempo[0] != "id" && tiempo[0] != "cod" && tiempo[0] != "clouds" && tiempo[0] != "name"))

                    divClima.innerHTML = `

                    <div id="clima2">
                        <div id="tiempito">
                            <h5 id="climaTitulo"> Clima Ahora | Benavidez <h5>
                        </div>
                        <hr id="lineaVertical">
                        <div id="api">
                            <div>
                                <img src="../paginas/icons/${climaAhora [0][1][0].icon}.png" class="card-img-top" id="icono">
                            </div>
                            <div id="temp">
                            <h5 class="card-title" id="tituloTiempo">${climaAhora [0][1][0].description}</h5>
                            <p class="card-text">${climaAhora [1][1].temp_min}° | ${climaAhora [1][1].temp_max}°</p>
                            </div>
                        </div>
                  </div>

                   `


        }
    )