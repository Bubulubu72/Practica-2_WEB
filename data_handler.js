// import {Product} from "./product.js"
// export {PList};

const products = []

class PList {
    static getProducts(){
        return products;
    }

    static getProductById(uuid) {
        return products.find( p => p._uuid == uuid )
    }

    static createProduct(product) {
        let newP = Product.createFromObject(product);
        products.push(newP);
    }

    static addProduct(title, description, imageUrl, unit, stock, pricePerUnit, category){
        let newP = new Product(title, description, imageUrl, 
            unit, stock, pricePerUnit, category);
        products.push(newP);
    }

    static updateProduct(uuid, updatedProduct) {
        let product = PList.getProductById(uuid);
        for( let prop in updatedProduct){
            product[prop] = updatedProduct[prop];
        }
    }

    static deleteProduct(uuid) {
        let index = products.findIndex( p => p._uuid == uuid);
        if(index >= 0){
            products.splice(index, 1);
        }
    }

    static findProducts(query) {
        let prop = query.split(':');
        let category = prop[0].trim();
        let title = prop[1].trim();

        let arr = [];
        arr = products.slice();

        if(category != ''){
            arr = products.filter( p => p.category.includes(category));
        }

        if(title != ''){
            arr = products.filter( p => p.title.includes(title));
        }

        if(category != '' && title != ''){
            arr = products.filter(p => 
                p.category.includes(category) || p.title.includes(title)
            );
        }
        return arr;
    }

    static productListToHTML(productList, htmlElement){
        htmlElement.innerHTML = productList.map( e => e.toHTML()).join("");
    }

}

// let prod = PList.getProducts();

// PList.addProduct('titulo1', 'descripcion 1', 'superImagen.com', "Pieza", 10, 1.7, "Fruto")
// PList.addProduct("Mango", "unas con el compa el luca", "crashBandi/.com", "Pieza", 15, 1.7, "Fruto")
// PList.addProduct("Manzanas", "doradas restauradoras", "manzanita.com", "XPieza", 10, 3.6, "Fruto")

// let p = new Product("Manzanas", "doradas restauradoras", "manzanita.com", "XPieza", 10, 3.6, "Fruto")
// PList.createProduct(p)
// let lIndex = p._uuid
// let newP = new Product("Manzanas", "doradas gustosas", "manzanitas.com", "XPiezaS", 10, 3.6, "Frutotas")

// console.log(PList.getProducts())

// PList.updateProduct(lIndex, newP)
// PList.deleteProduct(lIndex);

// console.log(PList.getProducts())
// console.log("Encontrado")
// console.log(PList.getProductById(lIndex));
