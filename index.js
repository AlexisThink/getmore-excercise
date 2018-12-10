var request = superagent;
var productos, productosMostrar;

request
.get('http://demo6292426.mockable.io/more-store')
.then((response) =>{
    prodcutos = response.body;
    productosMostrar = []

    prodcutos.map(producto =>{
        if(producto.isActive === true && productosMostrar.length < 3){
            productosMostrar.push(producto)
        } else {
            console.log("Not this one")
        }
    })
    return productosMostrar
})
.then((productosMostrar) =>{
productosMostrar.map(productoMotrar =>{
    //Create Elements
    var div = document.createElement('div');
    var nombre = document.createElement('h3');
    var descripcion = document.createElement('p');
    var precio = document.createElement('p');
    var proveedor = document.createElement('p');

    //Setting Classes
    div.className = 'pack'
    nombre.className = 'pack__nombre'
    descripcion.className = 'pack__descripcion'
    precio.className = 'pack__precio'
    proveedor.className = 'pack__proveedor'

    //Setting Values
    nombre.textContent = productoMotrar.nameOfProduct;
    descripcion.textContent = productoMotrar.description;
    precio.textContent = productoMotrar.price;
    proveedor.textContent = productoMotrar.provider;

    //Append Childs
    document.querySelector('.packs').appendChild(div)
    div.appendChild(nombre)
    div.appendChild(descripcion)
    div.appendChild(precio)
    div.appendChild(proveedor)
})
















console.log(productosMostrar)
})