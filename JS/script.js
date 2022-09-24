//Bienvenida
let texto = prompt("Ingrese SI para comprar \nIngrese NO para salir")
//3 Productos -> mostrar prod -> que desea comprar?
//cantidad-> stock -> precio total
let nombreProductoA = "Hospedaje"
let precioProductoA = 500
let stockProductoA = 6

let nombreProductoB = "Vuelos"
let precioProductoB = 250
let stockProductoB = 3

let nombreProductoC = "Combo hospedaje + vuelo"
let precioProductoC = 650
let stockProductoC = 10

//ciclo de compra
let productoCompra = prompt("ingrese el producto que desea: \n1 - Hospedaje\n2 - Vuelos\n3 - Combo Viaje\n ESC - Salir")
let precioTotal = 0
while(opcion != "ESC"){
if(productoCompra.toUpperCase() == "Hospedaje"){
    let cantidadProductoHospedaje = prompt("numero de reservas de" + nombreProductoA)
    if(cantidadProductoHospedaje <= stockProductoA){
        precioTotal = cantidadProductoHospedaje * precioProductoA
    }
    else{
        alert("Tenemos " + stockProductoA + "habitaciones disponibles")
    }
}
else if(productoCompra == "Vuelos"){
    let cantidadProductoVuelos = prompt("numero de reservas de" + nombreProductoB)
    if(cantidadProductoVuelos <= stockProductoB){
        precioTotal = cantidadProductoVuelos * precioProductoB
    }
    else{
        alert("Tenemos " + stockProductoB + "vuelos disponibles")
    }
}
else if(productoCompra == "Combo"){
    let cantidadProductoCombo = prompt("numero de reservas de" + nombreProductoC)
    if(cantidadProductoCombo <= stockProductoC){
        precioTotal = cantidadProductoCombo * precioProductoC
    }
    else{
        alert("Tenemos " + stockProductoC + "combos disponibles")
    }
}
}
