
function validarRta (texto, textoValidar){
    if (texto.toLowerCase() == textoValidar){
        return true
    }

    return false
}

let sigue = "si"



do{
    let nombreUsuario = prompt("Introduce tu nombre")
    let saludo = " Bienvenido a Givree"
    alert(nombreUsuario + saludo)

    let cantFrascos
    do{
        cantFrascos = parseFloat(prompt("ingrese la cant de frascos que quiera comprar"))
        if(isNaN(cantFrascos) == true){
            alert ("solo se permiten numeros validos")
        }

    }while(isNaN(cantFrascos) == true) 

    alert ("su total es de $" + (cantFrascos * 1500))

    let rta = prompt("¿Quiere realizar otra compra?")

    if (validarRta(rta, "no") == true){
        sigue = "no"
    }

}while (sigue == "si")



class frascoChico {
    constructor(nombre, color, descripcion, precio, stock, descuento) {
        this.nombre = nombre
        this.color = color
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
        this.descuento = descuento
    }
}


const producto1 = new frascoChico("glitter", "rojo", "50ml", 1500, 10, false)
const producto2 = new frascoChico("glitter", "azul", "50ml", 1500, 30, false)
const producto3 = new frascoChico("glitter", "verde", "50ml", 1500, 12, true)
const producto4 = new frascoChico("glitter", "dorado", "50ml", 1500, 20, false)

const productos = [producto1, producto2, producto3, producto4]


console.table(productos)

console.table(productos.filter(frascoChico => frascoChico.descuento == true))






/*class frascoGrande {
    constructor (nombre, descripcion, precio, stock, descuento){
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
        this.descuento = descuento
    }
}

const producto5 = new frascoGrande ("glitter", "rojo", "75ml", 2000, 15, false)
const producto6 = new frascoGrande ("glitter", "azul", "75ml", 2000, 30, true)
const producto7 = new frascoGrande ("glitter", "verde", "75ml", 2000, 7, false)
const producto8 = new frascoGrande ("glitter", "dorado", "75ml", 2000, 10, false)

const productosG = [producto5, producto6, producto7, producto8]

console.table(productosG.sort((producto5, producto6) => producto5.stock - producto6.stock))




*/
