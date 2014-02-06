/* exported Person */

var Person = (function(){

  'use strict';

  function Person(name, gender, age, weight){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.foods = [];
  }

  Person.prototype.eat = function (food, servings){
    this.foods.push(food);
    var totalCal = food.caloriesPerServing * servings;
    var poundsGained = Math.round(totalCal/3500);
    this.weight = this.weight + poundsGained;
  };

  Person.prototype.exercise = function (activity, minutes){
    var caloriesBurned;
    var poundsLost;
    if(this.gender === 'Male' && activity === 'Swim'){
      caloriesBurned = 900 * (minutes/60);
      poundsLost = Math.round(caloriesBurned/3500);
      console.log(poundsLost);
      this.weight = this.weight - poundsLost;
      console.log(this.weight);
    }
    else if(this.gender === 'Male' && activity === 'Run'){
      caloriesBurned = 700 * (minutes/60);
      poundsLost = Math.round(caloriesBurned/3500);
      console.log(poundsLost);
      this.weight = this.weight - poundsLost;
      console.log(this.weight);
    }
    else if(this.gender === 'Female' && activity === 'Swim'){
      caloriesBurned = 700 * (minutes/60);
      poundsLost = Math.round(caloriesBurned/3500);
      console.log(poundsLost);
      this.weight = this.weight - poundsLost;
      console.log(this.weight);
      
    }
    else if(this.gender === 'Female' && activity === 'Run'){
      caloriesBurned = 500 * (minutes/60);
      poundsLost = Math.round(caloriesBurned/3500);
      console.log(poundsLost);
      this.weight = this.weight - poundsLost;
      console.log(this.weight);
  
    }
  };

  Object.defineProperty(Person.prototype, 'crazyString', {
    get: function(){
   //   var crazyString = '';
   //   for(var i = 0; i < this.foods.length; i++){
   //     if(i % 2 === 0){
   //       crazyString += (this.foods[i].name.toUpperCase);
   //     }
   //     else{
   //       crazyString += (this.foods[i].name.toLowerCase);
   //     }

   //    }
      var crazyString = [];
      crazyString = _.map(this.foods, function(x){
        return x.name;
      });
      /*for(var i = 0; i < crazyString.length; i++){
        if(i%2 === 0){
          crazyString[i] = crazyString[i].toUpperCase;
        }
        else{
          crazyString[i] = crazyString[i].toLowerCase;
        }

      }*/
      crazyString = crazyString.join('--');
      console.log(crazyString);
      return crazyString;
    }
  }
  );
    


  return Person;




})();
