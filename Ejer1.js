var assert=require("assert");

//var arr=[4,4,5,12];
//var num= 9;
//var ok=res*num;

function Reduciendo(arr,num){

  arr.push(num);
  document.getElementById("hola").innerHTML=arr.reduce(function(valorAnt,valorAct,indice, vector){
    var res= valorAnt * valorAct;
    return res;
  });

}

describe("Reduciendo",function(){
  it("[4,4,5,12] , num= 9", function(){
    assert.equal(8640,Reduciendo([4,4,5,12],9));
  });
});
