// import {PList} from "./data_handler.js";
// import {Product} from "./product.js"
// export {ShoppingCart, ShoppingCartException, ProductProxy}

"use strict";

class ShoppingCartException {
    constructor(errorMesagge){
        this.errorMesagge = errorMesagge
    }
}

//solo un constructor que guarda uuid  y cantidad
class ProductProxy {
    constructor(uuid, cantidad){
        this._uuid = uuid;
        this._cantidad = cantidad;
    }
}   

class ShoppingCart {
    constructor() { 
        this._proxies = [];
        this._productos = [];
    }

    get productProxies() { 
        return this._proxies;
    }

    set productProxies(value) { 
        throw new ShoppingCartException("Imposible Asignar algun valor al proxie ")
    }

    get products() { 
        return this._productos;
    }

    set products(value) { 
        if((value == '' || (value instanceof Array  && value.length == 0))){
            console.log('nada que agregar');
            return;
        }
        if(value instanceof String){
            value = JSON.parse(value);
        }

        if(value instanceof Array){
            for( let index in value){
                this._productos.push(Product.createFromObject(value[index]));
            }
        }
        else{
            this._productos.push(Product.createFromObject(value));
            this._productos.push(newP);
        }
    }

    addItem(productUuid, amount) {
        if(amount <= 0){
            throw new ShoppingCartException("Monto incorrecto");
        }

        if(this._proxies.find( i => i._uuid === productUuid)){ //Si ya existe
            let index = this._proxies.findIndex( i => i._uuid === productUuid);
            this._proxies[index]._cantidad += amount;
        }
        else{
            let newP = new ProductProxy(productUuid, amount);
            this._proxies.push(newP);
            this._productos.push(PList.getProductById(productUuid));
        }
    }

    updateItem(productUuid, newAmount) {
        if(newAmount < 0){
            throw new ShoppingCartException("Nueva cantidad Incorrecta");
        }
        if(newAmount == 0){
            this.removeItem(productUuid);
        }
        if(newAmount > 0){
            if(this._proxies.find( i => i._uuid === productUuid)){
                let index = this._proxies.findIndex( i => i._uuid === productUuid);
                this._proxies[index]._cantidad = newAmount;
            }
            else{
                throw new ShoppingCartException("Producto Inexistente");
            }
        }
    }

    removeItem(productUuid) {
        let index = this._proxies.findIndex( i => i._uuid == productUuid);
        if(index >= 0){
            this._proxies.splice(index, 1);
            this._productos.splice(index, 1);
        }
        else{
            throw new ShoppingCartException("Producto Inexistente");
        }
    }

    calculateTotal() {
        let total = 0;
        for( let i = 0; i < this._proxies.length; i++){
            total += this._proxies[i]._cantidad * 
            PList.getProductById(this._proxies[i]._uuid)._pricePerUnit;
        }
        return total;
    }
    
}

