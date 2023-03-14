// import { generateUUID } from "./utils.js";
// export {Product};

"use strict";

class ProductException {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

//esta clase se enfoca a crear/editar objetos 
//(no usa ninguna lista de objetos para nada)
class Product{

    //constructor 
    constructor (title, description, imageURL, unit, stock, pricePerUnit, category){
        this._uuid = generateUUID();
        this._title = title;
        this._description = description;
        this._imageURL = imageURL;
        this._unit = unit;
        this._stock = stock;
        this._pricePerUnit = pricePerUnit;
        this._category = category;
    }
    
    // regresa el _uuid 
    get uuid(){
        return this._uuid;
    } 
    get title(){
        return this._title;
    }
    get description(){
        return this._description;
    }
    get imageURL(){
        return this._imageURL;
    }
    get unit(){
        return this._unit;
    }
    get stock(){
        return this._stock;
    }
    get pricePerUnit(){
        return this._pricePerUnit;
    }
    get category(){ 
        return this._category;
    }

    //regresa una excepción por querer setear un id
    set uuid(val) { throw new ProductException('Imposible settear un uuid');}

    set title(val){ 
        if(typeof val === 'string' && val !== ''){
            this._title = val;
        }
        else{
            throw new ProductException("Titulo no valido");
        }
    }

    set description(val){ 
        if(typeof val === 'string' && val !== ''){
            this._description = val;
        }
        else{
            throw new ProductException("Descripcion no valida");
        }
    }

    set imageURL(val){ 
        if(typeof val === 'string' && val !== ''){
            this._imageURL = val;
        }
        else{
            throw new ProductException("URL de imagen no valido");
        }
    }

    set unit(val){ 
        if(typeof val === 'string' && val !== ''){
            this._unit = val;
        }
        else{
            throw new ProductException("Unidad no valida");
        }
    }

    set stock(val){ 
        if(typeof val === 'number' && val >= 0){
            this._stock = val;
        }
        else{
            throw new ProductException("Cantidad no valido");
        }
    }

    set pricePerUnit(val){ 
        if(typeof val === 'number' && val >= 0){
            this._pricePerUnit = val;
        }
        else{
            throw new ProductException("Precio no valido");
        }
    }

    set category(val){ 
        if(typeof val === 'string' && val !== ''){
            this._category = val;
        }
        else{
            throw new ProductException("Categoria no valida");
        }
    }

    //getters y setters para cada propiedad title, description, imageUrl, unit, stock, pricePerUnit, category
    //recuerda usar en variables con guion bajo: this._title  this._unit
    //en los getters debes realizar las validaciones correspondientes

    static createFromJson(jsonValue) {
        return Product.createFromObject(JSON.parse(jsonValue));
    }

    static createFromObject(obj) {
        if( obj instanceof Product){ //Validado
            return obj;
        }

        let newObj = {};
        Object.assign(newObj, obj);
        Product.cleanObject(newObj);

        let newProduct = new Product(
            newObj.title,
            newObj.descripcion,
            newObj.imageURL,
            newObj.unit,
            newObj.stock,
            newObj.pricePerUnit,
            newObj.category
        )

        return newProduct;
    }

    static cleanObject(obj) {
        if(Object.keys(obj).length < 7){ 
            throw new ProductException('Longitud de propeidades insuficientes');
        }
        let propieddades = ['uuid', 'title', 'descripcion', 'imageURL', 
            'unit', 'stock', 'pricePerUnit', 'category'];

        for( let p in obj){
            if(!propieddades.includes(p)){
                delete obj[p];
            }
        }
    }

    //regresa el producto en formato HTML
    toHTML(){ //FRAGMENTO DE MI PRACTICA 1//
        return /*html */`
            <div class ='container'>
                <div class = "media">
                    <div class="media-left w-75">
                        <div class="media border pb-5">
                            <div class="media-body mt-3 ml-4">  
                                <h2>${this.title}  
                                </h2>
                                <div class="input-group mt-4 ">
                                    <div class="inut-group-prepend">
                                        <span class="input-group-text">stock:</span>
                                    </div>
                                    <input type="text" class="media-cantidad" placeholder="${this.stock}" readonly>
                                </div>
                                <div class="input-group mt-3">
                                    <div class="inut-group-prepend">
                                        <span class="input-group-text">Precio:</span>
                                    </div>
                                    <input type="text" class="media-price" placeholder="${this.pricePerUnit}" readonly>

                                    <div class="inut-group-prepend">
                                        <span class="input-group-text">${this._category}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="media-right">
                                <img class=" m-4 icard" src="${this.imageURL}" alt="Generic placeholder image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

//##############    Probando el codigo    ##############//

    // let product1 = new Product("platano", "amarrillo amarrillo", 'paginas.com', 
    //     'Penca', 20, 2, 54, "Fruto"
    // );

    // let manz = new Product("Manzanas", "doradas restauradoras", "manzanita.com",
    //     "XPieza", 10, 3.6, "Fruto"
    // );
    
    // let mango = new Product("Mango", "unas con el compa el luca", "crashBandi/.com",
    //     "Pieza", 15, 1.7, "Fruto"
    // );

    // let product = {
    //     "title": "Gansito",
    //     "descripcion": "como un chocolate",
    //     "extra1": 50,
    //     "imageURL": "imagenchingona.com",
    //     "unit": "pieza",
    //     "stock": 20,
    //     "pricePerUnit": 14.9,
    //     "category": "Postre",
    //     "extra2": "Lorem",
    // };
    
    // console.table(product);
    // console.table(product1);

    // Product.cleanObject(product);

    //let json = JSON.stringify(product)
    //console.log(typeof json);
    //console.log(Product.createFromJson(json));

    // let p = Product.createFromObject(product);
    // console.table(p);
    // console.log(p instanceof Product);
    // console.table(product);

    //console.log(product1.toHTML())