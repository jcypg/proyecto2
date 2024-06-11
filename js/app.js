let egresos = {
    Renta: 900,
    Ropa: 400,
    Luz: 300,
    Agua: 500,
}

let ingresos = {
    Quincena: 9000,
    Venta: 400,
    Bazar: 500
}

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = (totalIngresos() - totalEgresos()) / totalIngresos()
}

const totalIngresos = (ingresos) => {
    let total_ingresos = 0
    for (const ingreso of ingresos) {
        totalIngresos += ingreso
    }
    return total_ingresos
}

const totalEgresos = (egresos) => {
    let totalEgreso = 0
    for (const egreso of egresos) {
        totalEgresos += egreso
    }
    return totalEgreso;
}