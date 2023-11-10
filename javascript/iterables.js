
function* counter(){
    for(var i= 1 ; i<=5; i++){
        yield i;
    }
}
let generator = counter();

let numeros = [2,5,10];
// for(numeros of numeros){console.log(numeros);}
for(numeros of generator){console.log(numeros);}


//@@iterator
// Symbol.iterator

