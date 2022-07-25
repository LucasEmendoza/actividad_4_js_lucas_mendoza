console.log('Actividad 4,5' )

console.warn('Calcular el valor de venta de huevos segun su cantidad')

let cantidad = prompt('ingrese la cantidad de huevos a comprar')

let tipoH = prompt('ingrese tipo de huevo A o AA')

if ((tipoH == 'A') && (1 <= cantidad  &&  cantidad <= 100 )) {
    console.log('El valor total de su pedido es', parseFloat(cantidad)*220, '$',)
}

if ((tipoH == 'A') && ( 101 <= cantidad && cantidad <= 200  )) {
    console.log('El valor total de su pedido es', (parseFloat(cantidad)*220)*0.95, '$',)
}

if ((tipoH == 'A') && (201<= cantidad  &&  cantidad <= 300 )) {
    console.log('El valor total de su pedido es', (parseFloat(cantidad)*220)*0.92, '$',)
}
if ((tipoH == 'A') && (301 <= cantidad)) {
    console.log('El valor total de su pedido es', (parseFloat(cantidad)*220)*0.9, '$',)
}


    