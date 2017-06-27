var assert=require("assert");

//var arr=[1,2,3,4];
//var res=1;

function multiplicar(arr,res){

  arr.forEach(function addval(val){
     res*= val;
  });
  return res;

}

describe("Multiplicando", function(){
  it("[1,2,3,4], 1", function(){
    assert.equal("24",multiplicar([1,2,3,4],1));
  });
});
