// Circularly Linked List 

function Node(element) {
   this.element = element;
   this.next = null;
   this.previous = null;
}

function CircularlyLinkedList() {
   this.head = new Node("head")
   this.head.next = this.head;
   this.find = find;
   this.insert = insert;
   this.display = display;
   this.findPrevious = findPrevious;
   this.remove = remove;
}

function display() {
   var currNode = this.head;
   while (currNode.next !== null && currNode.next.element !== "head") {
      console.log(currNode.next.element);
      currNode = currNode.next;
   }
}

function advance (n) {

}

function back(n) {

}

function show (n) {

}