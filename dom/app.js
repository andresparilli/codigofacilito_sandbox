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
        };
    
    const row = document.querySelector('.row');

    
    const form = document.getElementById('course-form');

//trabajar el submit en el formulario y no en el boton
    form.addEventListener('submit', function(e){

    //recordar este metodo, para prevenir el envio
        e.preventDefault();

        let title = document.getElementById('title-form').value;
        let description = document.getElementById('description-form').value;

        create_card(title, description);
    });

    function create_card(title, description){
        let html = `<div class="col-sm-6 col-md-4">
                        <div calss="thumbnail">
                            <div class="caption">
                                <h3 id="title_card"> ${title} </h3>
                                <p id="description_card"> ${description} </p>
                                <p> <a href="#" class="btn btn-danger">Acción</a></p>
                            </div>
                        </div>
                    </div>`;
        row.innerHTML += html;

    }

});
