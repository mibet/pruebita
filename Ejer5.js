var assert=require('assert');

//var arr=[0,20];
function farenheit(arr){
var res;
  return res=arr.map(function(i){
    return (i*(9/5))+32;
  });

}

describe("Grados Celsius a Farenheit", function(){
  it("[0,20]", function(){
    assert.equal("32,68",farenheit([0,20]));
  });
});
