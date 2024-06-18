import Egreso from './Egreso.js'


let egresos = {
    new Egreso('Renta', 900, 0),
    new Egreso('Ropa', 400, 0),
    new Egreso('Luz', 300, 0),
    new Egreso('Agua', 500, 0),
}

let ingresos = {
    Quincena: 9000,
    Venta: 400,
    Bazar: 500
}

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = (totalIngresos() - totalEgresos()) / totalIngresos()

    console.log('presupuesto', formatoMoneda(presupuesto));
    console.log('porcentajeEgreso', formatoPorcentaje(porcentajeEgreso.toFixed(2)));
}

const totalIngresos = (ingresos) => {
    let total_ingresos = 0
    for (const key in ingresos) {
        const value = ingresos[key]
        total = total + value
    }
    return total
}

const totalEgresos = (egresos) => {
    let totalEgresos = 0
    for (const egreso of egresos) {
        totalEgresos += egreso
    }
    return totalEgreso;
}

let egreso1 = new Egreso