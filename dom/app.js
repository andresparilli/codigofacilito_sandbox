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
console.log(form);