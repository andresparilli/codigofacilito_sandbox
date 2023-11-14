document.addEventListener('DOMContentLoaded', function(){

    console.log("El dom ya fue construido");

    const title = document.getElementById('title');
        title.innerHTML = "Cursos";

    const description = document.getElementById('description');
        description.innerHTML = "Listado de cursos"

//const items = document.getElementsByClassName("list-group-item");

    const items = document.querySelectorAll("li:nth-child(even)");
        for (var i=0; i < items.length; i++){
            let element = items[i];
            element.style.background = '#f2f2f2'
        }

    const form = document.getElementById('course-form');

//trabajar el submit en el formulario y no en el boton
    form.addEventListener('submit', function(e){

    //recordar este metodo, para prevenir el envio
        e.preventDefault();

        let title = document.getElementById('title-form').value;
        let description = document.getElementById('description-form').value;

        console.log(title);
        console.log(description);
    });

});

/*

*/