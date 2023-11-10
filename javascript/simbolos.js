let simbolo = Symbol("mi-simbolo");


let obj = {};

obj[simbolo] =  function(){
  console.log('Mi nombre es un simbolo');
}
obj[simbolo]();