// import { Product } from "./product.js";
// import { PList } from "./data_handler.js";
// import { ShoppingCart } from "./shopping_cart.js";

let mainList = document.getElementById('mainList');

//crea 1 producto USANDO ADD PRODUCT
//PList.addProduct("Manzanas", "doradas restauradoras", "manzanita.com", "XPieza", 10, 3.6, "Fruto")

//Crea 1 producto USANDO UN JSON
// let product = Product.createFromJson(
//     `{
//     "title": "Manzana",
//     "descripcion": "manzanotas",
//     "imageUrl": "superFotoURL.com",
//     "unit": "Piece",
//     "stock": 21,
//     "pricePerUnit": 7.2,
//     "category": "frutos"
//     }`
//     );

// console.log(product)

//crea 1 producto USANDO PList.createProduct

// PList.createProduct(new Product("Platon", " restauradoras", "pala.com", "XPieza", 10, 3.6, "Frutotes"))
// console.log(PList.getProducts())

//Crea un objeto con muchas más propiedades que un producto
// let product2 = {
//     title: "Gansito",
//     descripcion: "como un chocolate",
//     extra1: 50,
//     imageURL: "imagenchingona.com",
//     unit: "pieza",
//     stock: 20,
//     pricePerUnit: 14.9,
//     category: "Postre",
//     extra2: "Lorem",
// };

//limpia el objeto  (cleanObject) //muestra el resultado en consola
// Product.cleanObject(product2)
// console.log(product2)

//añadelo a la lista con el metodo que quieras
// PList.createProduct(product2);
// console.log(PList.getProducts())

//crea un ciclo for para añadir 5 productos con estos datos
//PUEDES CAMBIAR LOS DATOS A TU GUSTO
let titulos= ["mermelada", "cebolla", "aguacate", "platano", "pan blanco"]
let descripcion = ["de México", "de Puebla", "de Michoacan","de Aguascalientes", "de Jalisco"]
let unit=["pieza", "kg", "kg", "kg", "pieza"]
let category=["aderezo", "verdura", "verdura","fruta","pan"]
let precio= [50.50,25.00,58.00,40.00,60.50]
let stock= [15,5,10,8,15] 
let images=[
    "https://dibujosalapiz.com/wp-content/uploads/2016/04/10-dibujos-a-lápiz-faciles-de-copiar-1.gif",
    "https://cdn2.dineroenimagen.com/media/dinero/styles/gallerie/public/images/2020/09/keyboard-8864621920-2-2.jpg",
    "https://cadenaser.com/resizer/-Fya9KRTW6aP7O6-yCOXEpe3ha4=/768x432/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/CES4DLOSORHVVPCCF2IO7LFCHQ.JPG",
    "https://www.ubackup.com/screenshot/es/std/copiar-carpetas.png",
    "https://articles-img.sftcdn.net/f_auto,t_article_cover_xl/auto-mapping-folder/sites/2/2023/01/universidad-ia-lapiz-papel.jpg",
]; //PONLE IMAGENES AL GUSTO

for (let index = 0; index < 5; index++) {
    PList.addProduct(
      titulos[index],
      descripcion[index],
      images[index],
      unit[index],
      stock[index],
      precio[index],
      category[index]
    );
  }

// console.log(PList.getProducts())

/************PROBAR TODO *******************/
//1.1. mostrar los productos en html
// PList.productListToHTML(PList.getProducts(), mainList);

//1.2. actualizar la lista de productos  cambia algun valor de algun producto
let toUpdate = new Product(
    "elote",
    "Suave y de buen color",
    "https://www.smartnfinal.com.mx/wp-content/uploads/2019/10/99608-Elote-amarillo-1-pz.jpg",
    "KG",
    28,
    29,
    "Fruta"
  );

// console.log(PList.getProducts());
PList.updateProduct(PList.getProducts()[0]._uuid, toUpdate);
// PList.productListToHTML(PList.getProducts(), mainList);

//1.3. borrar producto de la lista
// PList.deleteProduct(PList.getProducts()[1]._uuid);
// PList.productListToHTML(PList.getProducts(), mainList);

//1.4. filtrar solo por categoría
// console.log(PList.findProducts("pan:"));

//1.5: filtrar solo por titulo
//console.log(PList.findProducts(":aguacate"));

//1.6. filtrar por ambas
//console.log(PList.getProducts());
//console.log(PList.findProducts("fruta:elote"));

// 1.7. realiza algo que ocasione una excepción. 
try{
    Product.addProduct(
        'ThisOne',
        'GoingTo',
        'Imagenfallo.jpg',
        'f',
        40,
        -1,
        'Fail'
    );

}catch(e){
    //console.log("Puras fallas con esta Practica");
}

// ------------------ Test ShoppingCart ------------------
let cart = new ShoppingCart();
// console.table(cart);

//2.1 añade unos 4 items  (con addItem)

// console.log(PList.getProducts())
cart.addItem(PList.getProducts()[0].uuid, 1)
cart.addItem(PList.getProducts()[1].uuid, 1)
cart.addItem(PList.getProducts()[2].uuid, 1)
cart.addItem(PList.getProducts()[3].uuid, 1)
cart.addItem(PList.getProducts()[4].uuid, 1)
//console.log(cart);

//2.2 actualiza un producto del carrito
// console.log(PList.getProducts())
cart.updateItem(PList.getProducts()[1].uuid, 50);
// console.log(cart);

//2.3 borra un producto
// console.log(PList.getProducts())
cart.removeItem(PList.getProducts()[1]._uuid);
// console.log(cart);

//2.4 calcula el total del carrito
//console.log(cart);
//console.log("Total: ", cart.calculateTotal());

PList.productListToHTML(PList.getProducts(), mainList);



