function List() {
   this.listSize = 0;
   this.pos = 0;
   this.dataStore = [];
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.front = front;
   this.end = end;
   this.prev = prev;
   this.next = next;
   this.length = length;
   this.currPos = currPos;
   this.moveTo = moveTo;
   this.getElement = getElement;
   this.contains = contains;   
}

// Append: Adding element to a list, listSize is incremented by 1
function append(element) {
   this.dataStore[this.listSize++] = element;
}

// Remove: Removing an element to a list
function find(element) {
   for(var i = 0; i < this.dataStore.length; ++i) {
      if(this.dataStore[i] == element) {
         return i;
      }
   } 
   return -1
}

// Find: Finding an element in a list
function remove(element) {
   var foundAt = this.find(element);
   if(foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
   }
   return false;
}

// Length: Determining the number of elements in a list
function length() {
   return this.listSize;
}

// toString: Retrieving a List's elements
function toString() {
   return this.dataStore;
}

// Insert: Inserting an element into a list
function insert(element, after) {
   var insertPos = this.find(after);
   if(insertPos > -1) {
      this.dataStore.splice(insertPos+1, 0, element);
      ++this.listSize;
      return true
   }
   return false
}

// CLear: Removing all elements from a list
function clear() {
   delete this.dataStore;
   this.dataStore = [];
   this.listSize = this.pos = 0;
}

// Contains: determining if a given value is in a list
function contains(element) {
   for(var i = 0; i < this.dataStore.length; ++i) {
      if(this.dataStore[i] == element) {
         return true;
      }
   }
   return false
}

// Traversing a list
function front() {
   this.pos = 0;
}

function end() {
   this.pos = this.listSize - 1;
}

function prev() {
   if(this.pos > 0) {
      --this.pos;
   }
}

function next() {
   if (this.pos < this.listSize - 1) {
      ++this.pos;
   }
}4

function currPos() {
   return this.pos;
}

function moveTo(position) {
   this.pos = position;
}

function getElement() {
   return this.dataStore[this.pos];
}

var names = new List();
names.append("Cynthia")
names.append('Raymond')
names.append('Barbara');
names.append('Clayton')
names.append('Jennifer')
names.append('Bryan')
names.append('Danny')
// console.log(names.toString())
// names.remove('Barbara')
// console.log(names.toString())

names.front();
// console.log(names.getElement())

names.next();
// console.log(names.getElement())

names.next();
names.next();
names.prev();
// console.log(names.getElement())

// ITERATING THROUGH A LIST
// How to use an interator to traverse through a list
for(names.front(); names.currPos() < names.length(); names.next()) {
   // console.log(names.getElement())
}

// Traverse a list backward
for(names.end(); names.currPos() >= 0; names.prev()) {
   console.log(names.getElement());
}