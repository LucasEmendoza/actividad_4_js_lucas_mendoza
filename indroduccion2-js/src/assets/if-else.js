console.log('Conectando a if-else')
/* 
console.warn('Construyendo un if')

let a = 9

if (a > 10) {
    console.log(`${a} es mayor que 10`)
} else {
    console.log(`${a} es menor que 10`)
}

console.log('fin del programa') */


//*-----------------------------------------------------------------------------------

console.warn('Dias de la semana')

const hoy = new Date()
let dia = hoy.getDay()
console.log({ dia })

if (dia === 0) {
    console.log('Domingo')
} else if (dia === 1) {
    console.log('Lunes')
} else {
    console.log('No es domingo ni lunes')
}


const diasDeLaSemana = ['Domingo', 'lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

console.log(diasDeLaSemana[dia])
console.log(diasDeLaSemana[5])


const diaSemana ={
0: 'Domingo', 
1: 'lunes',
2: 'Martes',
3: 'Miercoles',
4: 'Jueves',
5: 'Viernes',
6: 'Sabado'}
 
console.log(diaSemana[dia])






