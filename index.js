
const URL = "https://fakestoreapi.com/products";
// let titulo = document.getElementById("titulo")
// let precio = document.getElementById("precio")
let productos = document.getElementById("productos")

let tabla = "<div>";
function getData(){
    fetch(URL)
    .then( response => response.json() )
    .then( data => {
        console.log("Datos de la api: ", data)
        for(let i = 0; i < data.length; i++ ){
             //crear tag etiquetas html con js
             let bloqueHtml = `<p>${data[i].title}</p>`;
             console.log(bloqueHtml)
             tabla += bloqueHtml;
        }
        tabla +="</div>";
        productos.innerHTML = tabla;
    })
    
}

getData();