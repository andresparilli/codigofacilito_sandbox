//console.log("Hola soy codigo JavaScript ejectuandose desde un archivo extreno");

//DOM
/* 
let links = document.querySelectorAll("a");
links.forEach(function(link){
    console.log(link);
});

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener("click",function(){
        console.log(this);

    })
});
*/

//Ejecricio
//Obtener elementos de la clase .close

let links = document.querySelectorAll(".close");
// recorrelos
links.forEach(function(link){
// Agergar evento con el click
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");
        //Quita las clases de animacion existentes
        content.classList.remove("animate__bounceIn");
        //Agrega clases para asnimar a la salida
        content.classList.add("animate__bounceOut");
        //Temporizador por que sucede muy rapido
        setTimeout(function(){
            location.href = "/desarrolloweb/etapa2/";
        },700);

        return false;

    })
});

