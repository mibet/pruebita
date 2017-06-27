var assert=require("assert");

//var arr=[20,16,89,6];
//var anioNacimiento="";


function anioN(arr){
var anioNacimiento="";
var anio=2017;
  arr.forEach(function add(i){
    if(i>=18 && i%2==0){
      anioNacimiento+=anio-i+" ";
    }
  });

  return anioNacimiento;

}

describe("Calculando Año de NAcimiento",function(){
  it("[20,16,89,6]", function (){
    assert.equal(1997,anioN([20,16,89,6]))
  })
})
