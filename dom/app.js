const title = document.getElementById('title');
title.innerHTML = "Cursos";

const description = document.getElementById('description');
description.innerHTML = "Listado de cursos"

//const items = document.getElementsByClassName("list-group-item");

const items = document.getElementsByTagName("li")
for (var i=0; i < items.length; i++){
    if (i % 2 == 0){
        let element = items[i];
        element.style.background = '#f2f2f2'
    }
}