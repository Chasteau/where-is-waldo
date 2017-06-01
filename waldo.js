
// v2 waldo

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