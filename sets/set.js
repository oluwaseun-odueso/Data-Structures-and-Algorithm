function Set() {
   this.dataStore = [];
   this.add = add;
   this.remove = remove;
   // this.size = size;
   this.union = union;
   this.intersect = intersect;
   // this.subset = subset;
   // this.difference = difference;
   this.show = show;
   this.contains = contains;
};

function add(data) {
   if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data);
      return true;
   } else return false;
};

function remove(data) {
   var position = this.dataStore.indexOf(data);
   if (position > -1) {
      this.dataStore.splice(position, 1);
      return true
   } else return false
};

function show() {
   return this.dataStore;
};

function contains(data) {
   if (this.dataStore.indexOf(data) > -1) {
      return true;
   } else return false;
}

function union(set) {
   var newSet = new Set();
   for(var i = 0; i < this.dataStore.length; i++) {
      newSet.add(this.dataStore[i])
   }
   for (var i = 0; i < set.dataStore.length; i++) {
      // if (!newSet.contains(set.dataStore[i])) {
      //    newSet.dataStore.push(set.dataStore[i]);
      // }
      newSet.add(set.dataStore[i])
   }
   return newSet
}

function intersect(set) {
   var tempSet = new Set();
   for (var i = 0; i < this.dataStore.length; ++i) {
      if (set.contains(this.dataStore[i])) {
         tempSet.add(this.dataStore[i]);
      }
   }
   return tempSet;
}

// Test cases for intersection
var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Bryan");
var inter = cis.intersect(dmp);
console.log(inter.show())

// Test cases for union
// var cis = new Set();
// cis.add("Mike");
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Raymond");
// var dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Jonathan");
// dmp.add("Mike")
// var it = new Set();
// it = cis.union(dmp);
// console.log(it.show());

//Set class test case
// var names = new Set();
// names.add("David");
// names.add("Jennifer");
// names.add("Cynthia");
// names.add("Mike");
// names.add("Raymond");

// if (names.add("Mike")) {
//    console.log("Mike added")
// } else {
//    console.log("Can't add Mike, must already be in set");
// }
// console.log(names.show());

// var removed = "Mike";
// if (names.remove(removed)) {
//    console.log(removed + " removed.");
// } else {
// console.log(removed + " not removed.");
// }

// names.add("Clayton");
// console.log(names.show());
// removed = "Alisa";
// if (names.remove("Mike")) {
//    console.log(removed + " removed.");
// } else {
//    console.log(removed + " not removed.");
// }