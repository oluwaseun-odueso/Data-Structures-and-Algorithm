// Queue class definition
function Queue () {
   this.dataStore = [];
   this.enqueue = enqueue;
   this.dequeue = dequeue;
   this.front = front;
   this.back = back;
   this.toString = toString;
   this.empty = empty;
}

// The enqueue() function adds an element to the end of a queue
function enqueue (element) {
   this.dataStore.push(element);
}

// The dequeue() function removes an element from the front of a queue
function dequeue () {
   return this.dataStore.shift();
}

// We can examine the front and back elements of a queue using these functions:
function front () {
   return this.dataStore[0]
}

function back () {
   return this.dataStore[this.dataStore.length - 1]
}

// The toString() function displays all the elements in a queue
function toString () {
   var returnString = ""
   for (var i = 0; i < this.dataStore.length; ++i) {
      returnString += this.dataStore[i] + "\n"
   } return returnString
}

// The empty() function lets us know if a queue is empty
function empty () {
   if (this.dataStore.length == 0) {
      return true;
   } else {
      return false
   }
}