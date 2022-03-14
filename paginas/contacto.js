class Consulta {
    constructor(nombre, email, telefono, consulta) {
        this.nombre = nombre.toUpperCase()
        this.email = email.toUpperCase()
        this.telefono = telefono
        this.consulta = consulta
    }
}

let consultas;

if (localStorage.getItem('consultas')) {
    consultas = JSON.parse(localStorage.getItem('consultas'))
} else {
    consultas = []
}

let formConsulta = document.getElementById('formContacto')
let alerta = document.getElementById("alerta")
let alertaBtn = document.getElementById("btnContacto")



formConsulta.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombreContacto = document.getElementById('nombre2').value
    let emailContacto = document.getElementById('email').value
    let telefonoContacto = document.getElementById('telefono2').value
    let consultaContacto = document.getElementById('consulta').value


    let objetoConsulta = new Consulta(nombreContacto, emailContacto, telefonoContacto, consultaContacto)
    

    consultas.push(objetoConsulta)

    localStorage.setItem('consultas', JSON.stringify(consultas))

    formConsulta.reset()



})




















