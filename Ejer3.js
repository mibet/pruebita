var assert=require("assert");
/*
var arr=[7,21,44,80,77,35];
var n=7;

*/

function multiplo(arr,n){
var res=[];
  arr.forEach(function addva(val){
    if(val%n==0){
      //res+=val+" ";
      res.push(val);
    }
  });

  return res;

}


describe("Multiplos de un numero",function(){
  it("[7,21,44,80,77,35], 7", function(){
    assert.equal([7, 21, 77, 35],multiplo([7,21,44,80,77,35], 7));
  });
});
