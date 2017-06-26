var arr=[20,16,89,6];
var anioNacimiento="";
var anio=2017;
arr.forEach(function add(i){
  if(i>=18 && i%2==0){
    anioNacimiento+=anio-i+" ";
  }
});

document.write(anioNacimiento);
