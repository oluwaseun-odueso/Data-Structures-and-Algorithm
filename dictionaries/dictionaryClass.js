function Dictionary () {
   this.add = add;
   this.dataStore = new Array();
   this.find = find;
   this.remove = remove;
   this.showAll = showAll;
   this.count = count;
   this.clear = clear;
}

function add (key, value) {
   this.dataStore[key] = value;
}

function find (key) {
   return this.dataStore[key];
}

function remove (key) {
   delete this.dataStore[key]
}

// An issue with the function below
function showAll () {
   for (var key in this.datastore) {
      if (this.dataStore.hasOwnProperty(key)) {
         console.log(key + " -> " + this.datastore[key]);
      }
   }
}

function count() {
   var n = 0;
   for (var key in this.datastore) {
      ++n;
   }
   return n;
}

function clear() {
   for (var key in this.dataStore) {
      delete this.dataStore[key]
   }
}


var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());