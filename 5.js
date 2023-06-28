/**
   PSEUDOCODE
   function sortArray(arr):
    evens = []  // initialize an empty array for even numbers
    odds = []  // initialize an empty array for odd numbers
    chars = []  // initialize an empty array for characters
    
    for i = 0 to length of arr:   //Iterate through the elements in the array while checking if the element is an even number, odd number or a character
        element = arr[i]
        
        if element is a number:
            if element is even:
                add element to evens
            else:
                add element to odds
        else if element is a single character:
            add element to chars
    
    sort evens in ascending order
    sort odds in ascending order
    sort chars in alphabetical order
    
    result = {
        evens: evens,
        odds: odds,
        chars: chars
    }
    
    return result
 
 */



/**
 * 
 * @param {*} arr 
 * @returns 
 */
function sortArray(arr) {
  
  var evens = [];
  var odds = [];
  var chars = [];

  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];

    if (typeof element === 'number') {
      if (element % 2 === 0) {
        evens.push(element);
      } else {
        odds.push(element);
      }
    } else if (typeof element === 'string' && element.length === 1) {
      chars.push(element);
    }
  }

  evens.sort(function(a, b) {
    return a - b;
  });
  odds.sort(function(a, b) {
    return a - b;
  });
  chars.sort();

  var result = {
    evens: evens,
    odds: odds,
    chars: chars
  };

  return result;
}

// Example usage
var someArray = [3.0, 'a', 7, 'x', '20', 'd', 4, 'f', 8];
var result = sortArray(someArray);
console.log(result);
