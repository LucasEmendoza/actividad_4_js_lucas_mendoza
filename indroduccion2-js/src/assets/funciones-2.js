console.warn('Inicio de sentecias')
console.log('Conectado a funciones-2')
/* 
console.warn('Funcion tradicional con clave de valor sin repetir ')

function crearPersona(nombre, apellido){
    return{ 
        nombre: nombre,
        apellido: apellido,
    }
}

const persona = crearPersona('Lucas', 'Mendoza')
console.log({ persona })
console.log( persona )

//-------------------------------------------------------------------------------------------------------------

console.warn('Funcion tradicional con clave de valor sin repetir')

function crearPersona(nombre, apellido){
    return{ 
        nombre,
        apellido,
    }
}
const persona2 = crearPersona('Monica', 'Toro')
console.log({ persona2 })
console.log( persona2)

//------------------------------------------------------------------------------------------------------------ 

console.warn('Funcion flecha tercera')

const crearPersona3 = (nombre, apellido) => {
    return { 
        nombre,
        apellido,
    }
}
const persona3 = crearPersona3('Andres', 'Eduardo')
console.log({ persona3 })
console.log( persona3)

//---------------------------------------------------------------------------------------------------------------------


console.warn('Funcion flecha sin llaves - cuarta')

const crearPersona4 = (nombre, apellido) => ({ nombre, apellido, })
    
    let nombre = 'sandra'
    let apellido = 'Ziñuga'

const persona4 = crearPersona4('nombre', 'apellido')
console.log({ persona4 })
console.log( persona4)

//--------------------------------------------------------------------------------------------------

console.warn('Pasando argumentos')

const argumentos = (...args) => {
    return args
}
const datos = argumentos(10, true, false, 'Gustavo', 'Gomez')

console.log({ datos })
console.log( datos )
 */
//*************************************************************************************** 

console.warn('Desestructurando')

const args = [25, 'fred', 'Carvajal', true, function () {console.log('cantar')} ]

const [edad, apellido, nombre, cantante, cantar] = args

const integrante = {
    edad,
    apellido,
    nombre,
    cantar,

}



