/**
 * Create a grades object that stores a set of student grades in 
 * an object. Provide a function for adding a grade and a function 
 * for displaying the student's grade average.
 */

function studentGrade() {
   this.gradeStore = [];
   this.add = add;
   this.display = display;
}

function add(score) {
   this.gradeStore.push(score)
}

function display(gradeStore) {
   for (var i = 0; i < gradeStore.length; ++i) {
      console.log(gradeStore[i])
   }
}