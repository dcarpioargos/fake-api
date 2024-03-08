const URL = "https://fakestoreapi.com/products";
let productos = document.getElementById("productos")
let tabla = "<div class='card'>";
function getData(){
    fetch(URL)
    .then( response => response.json() )
    .then( data => {
        console.log("Datos de la api: ", data)
        for(let i = 0; i < data.length; i++ ){
             let bloqueHtml = 
             `
             <div class='card-item'>
                <div class='cabecera'></div>
                <img width="100px" src="${data[i].image}" />
                <p>Titulo: ${data[i].title}</p>
                <p>Precio: ${data[i].price}</p>
                <p>Categ: ${data[i].category}</p>
             </div>
             `;
             tabla += bloqueHtml;
        }
        tabla +="</div>";
        productos.innerHTML = tabla;
    })
}
getData();