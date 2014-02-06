(function(){

  'use strict';

  $(document).ready(initialize);

  var timer;
  var sample = [];
  var random;
  var even = [];
  var odd = [];

  function initialize(){
    $(document).foundation();
    $('#go').click(go);
  }

  var wordsArray = [];
  function go(){
    var $preamble = $('#textArea').val();
    wordsArray = $preamble.split(' ');
    for(var i = 0; i < wordsArray.length; i++){
      random = Math.floor(Math.random() * (wordsArray.length));
      sample.push(wordsArray[random]);
      //console.log(sample[i].length);
      isEvenOrOdd(sample[i]);
      // sample = _.sample(wordsArray);
    }
    //console.log(sample);
    //console.log(even);
    //console.log(odd);
    
    

    timer = setInterval(getWords, 1000);


    
  }
  var counter = 0;
  function getWords(){
    var $evenDiv = $('<a href="https://www.google.com/#q=' + even[counter] + '"><div class="evenDiv">' + even[counter] + '</div></a></div><br>');
    $('#evenWord').append($evenDiv);

    var $evenLength = $('<div class="evenLength">');
    $evenLength.text(even[counter].length);
    $('#evenDisplay').append($evenLength);
    
    var $evenSum = $('<div class="evenSum">');
    $evenSum.text(sum(even[counter].length));
    $('#evenSum').append($evenSum);

    var $oddDiv = $('<a href="https://www.google.com/#q=' + odd[counter] + '"><div class+"oddDiv">' + odd[counter] + '</a><br>');
    $('#oddWord').append($oddDiv);

    var $oddLength = $('<div class="oddLength">');
    $oddLength.text(odd[counter].length);
    $('#oddDisplay').append($oddLength);

    var $oddProduct = $('<div class="oddProduct">');
    $oddProduct.text(product(counter));
    $('#oddSum').append($oddProduct);
    console.log(product(counter));
   
    counter++;
  }

  function isEvenOrOdd(sample){
    if(sample.length % 2 === 0){
      sample = sample.toLowerCase();
      even.push(sample);
    }
    else{
      sample = sample.toUpperCase();
      odd.push(sample);

    }

  }
  var result = 1;
  function sum(counter){
    for(var i = 0; i < counter; i++){
      result += i;
    }
    return result;
  }
      
  function product(counter){
    for(var i = 0; i < counter; i++){
      result *= i;
    }
    
  }
  

})();

