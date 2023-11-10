/*function* counter(){
    console.log("Estoy aqui");
    yield 1;
    console.log("Ahora estoy aqui");
    yield 2;
}
*/

function* counter(){
    for(var i= 1 ; i<=5; i++){
        yield i;
    }
}

let generator = counter();

for (i=0; i<6; i++){
    console.log(generator.next());
}
