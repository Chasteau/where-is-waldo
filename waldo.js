// var myFn = function() {
//   console.log("I am function.");
// }
// console.log(myFn);

// myFn.someAttribute = 42;
// //console.log(myFn.someAttribute);

// console.log(myFn);

// function runner(f) {
//   f();
// }

// runner(myFn);

// The second argument/parameter is expected to be a function

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr);   // execute callback
    }
  }
}

function actionWhenFound(arr) {
  var where = arr.indexOf("Waldo");
      console.log("Found him at index number " + where);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);