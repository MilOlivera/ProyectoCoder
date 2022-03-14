
class Cita {
    constructor(nombre, email, fecha, telefono, REY, eslora, motor) {
        this.nombre = nombre
        this.email = email
        this.fecha = fecha
        this.telefono = telefono
        this.REY = REY
        this.eslora = eslora
        this.motor = motor
    }
}

let citas;

if (localStorage.getItem('citas')) {
    citas = JSON.parse(localStorage.getItem('citas'))
} else {
    citas = []
}

let formCita = document.getElementById('formAstillero')



formCita.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombreCita = document.getElementById('nombre').value
    let emailCita = document.getElementById('email').value
    let fechaCita = document.getElementById('selectFecha').value
    let telefonoCita = document.getElementById('telefono').value
    let reyCita = document.getElementById('registro').value
    let esloraCita = document.getElementById('eslora').value
    let motorCita = document.getElementById('motor').value


    let objetoCita = new Cita(nombreCita, emailCita, fechaCita, telefonoCita, reyCita, esloraCita, motorCita)

    citas.push(objetoCita)

    localStorage.setItem('citas', JSON.stringify(citas))

    formCita.reset()


})



let alerta = document.getElementById("alerta")
let alertaBtn = document.getElementById("btnAstillero")

function alert(mensaje, tipo) {
    let reservar = document.createElement("div")
    reservar.innerHTML = '<div class="alert alert-' + tipo + ' alert-dismissible" role="alert" id="modificar">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alerta.append(reservar)
}

if (alertaBtn) {
    alertaBtn.addEventListener('click', function () {
        alert('Su cita fue reservada correctamente. Recuerde, nos encontramos en <b>Arribeños 699, Benavidez,Provincia de Buenos Aires</b>, y nuestro horario de atención es de <b>08:00 a 18:00 horas.</b>', 'success')
    })
}



