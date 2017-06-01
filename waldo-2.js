function findWaldo(arr) {
  arr.forEach(function(item, index) {
    if (item === "Waldo") {
      console.log("Found him! at index number " + index);
    }});
   // (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
       //found(arr);   // execute callback
  }
//   }
// }

// function actionWhenFound(item, index, ) {
//   if (item === "Waldo") {

//     console.log("Found him! at index number " + index);
//   }
// }

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);

// var words = ['one', 'two', 'three', 'four'];
// words.forEach(function(word) {
//   console.log(word);
//   if (word === 'two') {
//     words.shift();
//   }
// });