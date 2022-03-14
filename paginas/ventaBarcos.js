class Embarcaciones {
    constructor(id, modelo, anio, horasMotor, ubicacion, precio) {
        this.id = id
        this.modelo = modelo.toUpperCase()
        this.anio = anio
        this.horasMotor = horasMotor
        this.ubicacion = ubicacion
        this.precio = precio
    }
}


const barco1 = new Embarcaciones(1, "Génesis 290", 2020, 0, "San Fernando, Prov. de Buenos Aires", "105.000")
const barco2 = new Embarcaciones(2, "Segue 72", 2013, 420, "San Fernando, Prov. de Buenos Aires", "850.000")
const barco3 = new Embarcaciones(3, "Sk 350", 2004, 300, "San Fernando, Prov. de Buenos Aires", "120.000")
const barco4 = new Embarcaciones(4, "Segue 46", 2008, 484, "San Isidro, Prov. de Buenos Aires", "450.000")
const barco5 = new Embarcaciones(5, "Klase A 42", 2019, 140, "Tigre, Prov. de Buenos Aires", "490.000")
const barco6 = new Embarcaciones(6, "Altamar 50", 1999, 1100, "Tigre, Prov. de Buenos Aires", "420.000")
const barco7 = new Embarcaciones(7, "Preverza 54", 2012, 385, "Tigre, Prov. de Buenos Aires", "580.000")
const barco8 = new Embarcaciones(8, "Tango 48", 2010, 740, "Tigre, Prov. de Buenos Aires", "490.000")


let embarcacionesInventario = [barco1, barco2, barco3, barco4, barco5, barco6, barco7, barco8]

let divBarcos = document.getElementById("divBarcos")
let botonBarcos = document.getElementById("cargarBarcos")

botonBarcos.addEventListener('click', () => {
    embarcacionesInventario.forEach(barcosArray => {
        divBarcos.innerHTML += `
        <div class="card" id="producto${barcosArray.id}" style="width: 18rem;" id="cardVenta">
        <img src="img/ventaBarcos/imagen${barcosArray.id}.jpeg" class="imgBarcos" alt="">
          <div class="card-body" id="fondoCard">
                <h5 class="card-title">${barcosArray.modelo}</h5>
                <p class="card-text">${barcosArray.anio}</p>
                <p class="card-text">U$S ${barcosArray.precio}</p>
                <p class="card-text">${barcosArray.horasMotor} Horas</p>
                <p class="card-text">${barcosArray.ubicacion}</p>
                <div class="row" id="rowAlerta">
                <div class="alerta" id="alerta"></div>
                <a href="Contacto.html"><button type="button" id="agregar${barcosArray.id}" class="btn btn-secondary">MAS INFORMACION</button></a>
                </div>
            </div >
        </div > `
    })
})

localStorage.setItem('embarcacionesInventario', JSON.stringify(embarcacionesInventario))


$('#cargarBarcos').on('click', function () {
    $(this).attr('disabled', true)
})


