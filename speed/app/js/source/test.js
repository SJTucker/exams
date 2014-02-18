/* global Func: false, test:false, ok:false */

'use strict';

test('function#new', function(){
  var f1 = new Func();

  ok(f1 instanceof Func , '1 should equal 1');
});

test('function#square', function(){
  var f1 = new Func();

  var square = f1.square(3);

  ok(square === 9, 'square should equal 9');
  ok(f1.squares.length === 1, 'length of squares array should be 1');
});

test('function#sumSquares', function(){
  var f1 = new Func();

  var s1 = f1.square(3);
  var s2 = f1.square(5);
  var sum = f1.sumSquares();

  ok(s1 === 9, 's1 should equal 9');
  ok(s2 === 25, 's2 should equal 25');
  ok(f1.squares.length === 2, 'length of squares should be two');
  ok(sum === 34, 'sum of squares should equal 34');


});

