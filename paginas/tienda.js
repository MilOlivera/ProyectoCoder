
let tiendaInventario = []


$.getJSON('json/tienda.json', function (data){
    console.log(data)
    data.forEach(elemento => tiendaInventario.push(elemento))


tiendaInventario.forEach(tiendaArray => {


$('#tienda').append(`
        <div class="card" id="cardTienda">
        <img src="${tiendaArray.img}" class="imgTienda" alt="">
        <div class="card-body">
            <h5 class="card-title">${tiendaArray.nombre}</h5>
            <p class="card-text">${tiendaArray.version}</p>
            <p class="card-text">${tiendaArray.marca}</p>
            <p class="card-text">$ ${tiendaArray.precio}</p>
            <div class="row">
                <div class="alerta" id="alerta"></div>
                <a href="#tablaCarrito"><button type="button" id="agregar${tiendaArray.id}" class="btnCarrito btn-secondary">AGREGAR AL CARRITO<i class="fas fa-cart-arrow-down"></i></button></a>
            </div>
        </div> `)



$(`#agregar${tiendaArray.id}`).click(() => {
$('#tablaCarrito').append(`
<tbody>
<tr id="tr${tiendaArray.id}">
  <td></td>
  <td>${tiendaArray.nombre}</td>
  <td>${tiendaArray.version}</td>
  <td>${tiendaArray.marca}</td>
  <td>$ ${tiendaArray.precio}</td>
  <td><button id='eliminar${tiendaArray.id}' class="btnTrash"><i class="fas fa-trash-alt" id="trash"></i></button></td>
</tr>
</tbody>`)

$(`#eliminar${tiendaArray.id}`).click(() => {
    $(`#tr${tiendaArray.id}`).remove()
})

$('.btnVaciar').click(() => {
    $('tbody').remove()
})



})
})
})


$('.btnFinalizar').click(() => {
    $('#mensaje').append(`
    <div class="alert alert-success" role="alert">
    Su compra fue procesada satisfactoriamente
  </div>
`)

    $('tbody').hide()
})



