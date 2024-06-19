export default class Dato {
    constructor(descripcion, valor){
        this._descripcion = descripcion
        this._valor = valor
    }
setDescripcion(nuevaDescripcion){
    this._descripcion = nuevaDescripcion
}
getDescripicion (){
    return this._descripcion = nuevaDescripcion
}

setValor(nuevoValor){
    this._valor = nuevoValor
}
getValor(){
    return this._valor
}
}