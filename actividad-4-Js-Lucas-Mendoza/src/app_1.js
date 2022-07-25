console.log('Actividad 4,4' )

console.warn('Calculadora basica de cuatro operaciones')

let numero1 = prompt('Ingrese un primer numero')
let numero2 = prompt('Ingrese un un segundo numero')

let operacion = prompt('Ingrese la operacion a realizar')

if (operacion === 'sumar') {
    console.log(' La suma es: ', (parseFloat(numero1)+parseFloat(numero2)))
}

if (operacion === 'restar') {
    console.log(' La resta es: ', (parseFloat(numero1)-parseFloat(numero2)))
}

if (operacion === 'multiplicar') {
    console.log(' La multiplicacion es: ', (parseFloat(numero1)*parseFloat(numero2)))
}

if (operacion === 'dividir' &&  numero2 != 0) {
    console.log(' La dividicion es: ', (parseFloat(numero1)/parseFloat(numero2)))
} else console.log('No esposible dividir entre 0')