const Queue = require('./queue')
const fs = require('fs')


function Dancer (name, sex) {
   this.name = name;
   this.sex = sex;
}

function getDancers (males, females) {
   var names = fs.readFile('dancers.txt').split('\n');
   for (var i = 0; i < names.length; ++i) {
      names[i] = names[i].trim();
   }
   console.log(names)
   for (var i = 0; i < names.length; ++i) {
      var dancer = names[i].split(' ');
      var sex = dancer[0];
      var name = dancer[1];
      if (sex == 'F') {
         femalesDancers.enqueue(new Dancer(name, sex));
      } else {
         malesDancers.enqueue(new Dancer(name, sex));
      }
   }
}

function dance (males, females) {
   console.log("The dance partners are: \n")
   while (!females.empty() && !males.empty()) {
      person = females.dequeue();
      putstr("Female dancer is: " + person.name);
      person = males.dequeue();
      console.log(" and the male dancer is: " + person.name);
   }
   console.log();
}

// Test program
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
   print("There are " + maleDancers.count() +
   " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
   print("There are " + femaleDancers.count() +
   " female dancers waiting to dance.");
}