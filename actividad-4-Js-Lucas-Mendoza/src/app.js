console.log('Actividad 4')

console.warn('Hallando porcentage de mujeres y hombres en un grupo')

//Un maestro desea saber qué porcentaje de hombres y qué porcentaje
//de mujeres hay en un grupo de estudiantes.


let mujeres1 = prompt('Ingrese cantidad de mujeres en el grupo')
let hombres2 = prompt('Ingrese cantidad de hombres en el grupo')

let total = (parseFloat(mujeres1)+parseFloat(hombres2))


console.log('Los integrantes del grupo son', total)

let promHombres = ((hombres2 * 100)/total)
let promMujeres = ((mujeres1 * 100)/total)

console.log('El promedio de hombres en el grupo es del :', promHombres, '%')
console.log('El promedio de mujeres en el grupo es del :', promMujeres, '%')

