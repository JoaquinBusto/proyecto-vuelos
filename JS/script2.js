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

//Compra 
let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Hospedaje\n - Vuelos\n - Combo")
let precioTotal = 0
for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Hospedaje\n - Vuelos\n - Combo")

    if(productoCompra.toUpperCase() == 'Hospedaje'){
        let cantidadProductoHospedaje = prompt("numero de reservas de " + nombreProductoA)
        if(cantidadProductoHospedaje <= stockProductoA){
            precioTotal = precioTotal + (cantidadProductoHospedaje * precioProductoA)
        }
        else{
            alert("Hay" + stockProductoA + "habitaciones disponibles")
        }
    }
    else if(productoCompra == 'Vuelos'){
        let cantidadProductoVuelos = prompt("numero de reservas de" + nombreProductoB)
        if(cantidadProductoVuelos <= stockProductoB){
            precioTotal = precioTotal + (cantidadProductoVuelos * precioProductoB)
        }
        else{
            alert("Hay " + stockProductoB + " vuelos disponibles")
        }
    }
    else if(productoCompra == 'Combo'){
        let cantidadProductoCombo = prompt("numero de reservas de " + nombreProductoC)
        if(cantidadProductoCombo <= stockProductoC){
            precioTotal = precioTotal + (cantidadProductoCombo * precioProductoC)
        }
        else{
            alert("Hay " + stockProductoC + "combos disponibles")
        }
    } 
}