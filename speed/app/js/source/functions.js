/* exported Func */

var Func = (function(){

  'use strict';

  function Func(number){
    this.number = number;
    this.squares = [];
  }

  Func.prototype.square = function(number){
    this.squares.push(number * number);
    return number * number;
  };

  Func.prototype.sumSquares = function(){
    var sum = 0;
    for(var i = 0; i < this.squares.length; i++){
      console.log(this.squares[i]);
      sum += this.squares[i];
      console.log(sum);

    }
    return sum;
  };

  return Func;



})();

