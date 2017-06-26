var assert=require("assert");

//var arr=[2,5,7,2,3,8,10];

function Doble(arr){

  var result;
  return result=arr.map(function(i){
    return i*2+1;
  });

}


describe("Doble mas 1",function(){
  it("[2,5,7,2,3,8,10]", function(){
    assert.equal([5,11,15,5,7,17,21],Doble([2,5,7,2,3,8,10]));
  });
});
