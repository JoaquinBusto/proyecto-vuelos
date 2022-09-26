//Bienvenida
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
let stockProductoC = 8

function comprar(){
    let texto = prompt("Ingrese SI para comprar \nIngrese NO para salir")
    return texto 
}
function comprasProductos(nombre, stock, precio){
    let precioTotal = 0
    let cantidadProducto = parseInt(prompt("numero de reservas de " + nombre))
        if(cantidadProducto <= stock){
           precioTotal = precioTotal + (cantidadProducto * precio)
           alert(precioTotal)

        }
        else{
            alert("Hay" + " " + stock + " " + "en stock")
        }
}

while(comprar() !== "NO"){
    console.log("compra")
    let opcion = prompt("Ingrese que producto quiere comprar: \n - Hospedaje\n - Vuelos\n - Combo\n ESC salir")
    let opcionMayuscula = opcion.toUpperCase()
if(opcion !== "ESC"){

     if(opcionMayuscula === 'HOSPEDAJE'){
        comprasProductos(nombreProductoA, stockProductoA, precioProductoA)
    }
    else if(opcionMayuscula === 'VUELOS'){
        comprasProductos(nombreProductoB, stockProductoB, precioProductoB)
    }
    else if(opcionMayuscula === 'COMBO'){
        comprasProductos(nombreProductoC, stockProductoC, precioProductoC)
    } 
}else{
    break
}
}
 alert("Gracias por su visita")