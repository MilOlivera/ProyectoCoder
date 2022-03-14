var cuota = 8300

let cuota1 = (cuota + 700)
let cuota2 = (cuota + 1200)
let cuota3 = (cuota + 900)
let cuota4 = (cuota + 1400)
let cuota5 = (cuota + 1900)
let cuota6 = (cuota + 2100)
let cuota7 = (cuota + 2600)
let cuota8 = (cuota + 3100)
let cuota9 = (cuota + 2300)
let cuota10 = (cuota + 2800)
let cuota11 = (cuota + 3300)



class Guarderia {
    constructor(eslora, servicio, cuota) {
        this.eslora = eslora 
        this.servicio = servicio
        this.cuota = this.cuotaa()
    }

    cuotaa() {
        if (this.eslora === "1" && this.servicio === "5"){
            return(cuota)
        }else if(this.eslora === "1" && this.servicio === "6" ){
            return(cuota1)
        }else if(this.eslora === "1" && this.servicio === "7"){
            return(cuota2)
        }else if(this.eslora === "2" && this.servicio === "5"){
            return(cuota3)
        }else if(this.eslora === "2" && this.servicio === "6"){
            return(cuota4)
        }else if(this.eslora === "2" && this.servicio === "7"){
            return(cuota5)
        }else if(this.eslora === "3" && this.servicio === "5"){
            return(cuota6)
        }else if(this.eslora === "3" && this.servicio === "6"){
            return(cuota7)
        }else if(this.eslora === "3" && this.servicio === "7"){
            return(cuota8)
        }else if(this.eslora === "4" && this.servicio === "5"){
            return(cuota9)
        }else if(this.eslora === "4" && this.servicio === "6"){
            return(cuota10)
        }else if(this.eslora === "4" && this.servicio === "7"){
            return(cuota11)
        }
    }
 
}


let calculoCuota
if (localStorage.getItem('calculoCuota')) {
    calculoCuota = JSON.parse(localStorage.getItem('calculoCuota'))
} else {
    calculoCuota = []
}

let form = document.getElementById('nuevoForm')
let cont2 = document.getElementById('cont2')
let btnForm = document.getElementById('btnFormulario')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let eslorax = document.getElementById('eslorax').value
    let servicio = document.getElementById('serviciox').value




    let objetoGuarderia = new Guarderia (eslorax, servicio, this.cuota)


    calculoCuota.push(objetoGuarderia)

    localStorage.setItem('calculoCuota', JSON.stringify(calculoCuota))

    form.reset()

    calculoCuota.forEach(guarderiaArray => {
        cont2.innerHTML =
            `<div id="cont2"></div>
                    <div class="card" id="card3">
                        <div class="card-header" id="cardTitulo">
                                CUOTA MENSUAL ESTIMADA 
                        </div>    
                        <div class="card-body">
                        <p class="card-text" id="cuota2"><b>$ ${guarderiaArray.cuota}</p>
                        <hr>
                        <a href="Contacto.html" class="btn btn-secondary" id="masInfo">MAS INFORMACION</a>
                    </div>
          </div>`
    })
})