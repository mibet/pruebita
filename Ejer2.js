var assert=require("assert");
/*
var arr=[784123123,355676784,342354355];
var n=784;
*/
function Buscando(arr,n){
  var result;
  return result=arr.filter( function igual(val){
    var val= val.toString();
    var num=n;
    if((val.substr(0,3)==num) || (val.substr(-3)==num))
      {
        return true;
      }
  });

}



describe("Buscando digitos parecidos",function(){
  it("[784123123,355676784,342354355], 784", function(){
    assert.equal([784123123,355676784],Buscando([784123123,355676784,342354355], 784));
  });
});
