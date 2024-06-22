import {Ingreso} from './Ingreso.js';
import {Egreso} from './Egreso.js';

let ingresos = [
    new Ingreso('Quincena', 9000, 0),
    new Ingreso('Venta', 400, 1),
    new Ingreso('Bazar', 500, 2)    
]

let egresos = [
    new Egreso('Renta', 900, 0),
    new Egreso('Ropa', 400, 1),
    new Egreso('Luz', 300, 2),
    new Egreso('Agua', 500, 3),
]

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};

const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
};

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos);
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos);
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
};
    
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
};

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
};

const crearIngresoHTML = (ingreso) => {
    return `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
    <div clsss="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
    <div class="elemento_eliminar">
    <button class="elemento_eliminar_btn" onclick="eliminarIngreso(${ingreso.id})">
    <ion-icon name="close-circle-outline"></ion-icon>
    </button>
    </div>
    </div>
    </div>`
}

const eliminarIngreso = (id) => {
    let indiceEliminar = ingreso.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarCabecero();
};

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
    return `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
    <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
    <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEgresos())}</div>
    <div class="elemento_eliminar">
    <button class="elemento_eliminar_btn" onclick="eliminarEgreso(${egreso.id})">
    <ion-icon name="close-circle-outline"></ion-icon>
    </button>
    </div>
    </div>
    </div>
    `;
};

const eliminarEgreso = (id) => {
    let indiceEliminar = egreso.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarCabecero();
};

export const agregarDato = () => {
    let forma = document.forms['forma'];
    let tipo = forma['tipo'].value;
    let descripcion = forma['descripcion'].value;
    let valor = parseFloat(forma['valor'].value);

    if (descripcion !== '' && !isNaN(valor) && valor > 0) {
        if (tipo === 'ingreso') {
            ingresos.push(new Ingreso(descripcion, valor));
            cargarCabecero();
            cargarCabecero();
        }else if (tipo === 'egreso'); {
            egresos.push(new Egreso(descripcion, valor));
            cargarCabecero();
            cargarCabecero();
        }
    }
};

window.cargarApp = cargarApp;
window.agregarDato = agregarDato;