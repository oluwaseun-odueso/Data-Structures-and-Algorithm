function Dictionary () {
   this.add = add;
   this.dataStore = new Array();
   this.find = find;
   this.remove = remove;
   this.showAll = showAll;
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

var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();