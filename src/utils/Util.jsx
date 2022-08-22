export const NumeroPaginacion = (arreglo) => {

    if(arreglo === undefined)
        return 1

    if(arreglo.length === 0 || arreglo[0].data.length === 0)
        return 1
     
    const numero = Math.ceil(arreglo[0].data.length / 6)
    return numero
}

export const ObtenerArreglo = (arreglo, pagina) => {
    const ultimoDatoArreglo = (pagina * 6)
    const primerDatoArreglo = ultimoDatoArreglo - 6
    const nuevoArreglo = []
    if (ultimoDatoArreglo -1 > arreglo.length) {
        for (let index = primerDatoArreglo; index <= arreglo.length -1; index++) {
            nuevoArreglo.push(arreglo[index])           
        }
    } else {
        for (let index = primerDatoArreglo; index <= ultimoDatoArreglo - 1; index++) {
            nuevoArreglo.push(arreglo[index])           
        }
    }

    return nuevoArreglo
}