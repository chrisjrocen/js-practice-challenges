/**
 * PSEUDOCODE
 * function fizzBuzz(parameter1, parameter2):
    combinedLength = length(parameter1) + length(parameter2)

    if combinedLength is divisible by 3 and combinedLength is divisible by 5:
        return "FizzBuzz"
    else if combinedLength is divisible by 3:
        return "Fizz"
    else if combinedLength is divisible by 5:
        return "Buzz"
    else:
        return None

 */

function fizzBuzz(parameter1, parameter2) {
    var combinedLength = parameter1.length + parameter2.length;

    if (combinedLength % 3 === 0 && combinedLength % 5 === 0) {
        return "FizzBuzz";
    } else if (combinedLength % 3 === 0) {
        return "Fizz";
    } else if (combinedLength % 5 === 0) {
        return "Buzz";
    } else {
        return null;
    }
}

// Example usage:
var result1 = fizzBuzz("Abale", "Ocen");
console.log(result1);  // Output: "Fizz"

var result2 = fizzBuzz("Chris", "Brian");
console.log(result2);  // Output: "Buzz"

var result3 = fizzBuzz("Codes", "Challenges");
console.log(result3);  // Output: "FizzBuzz"
