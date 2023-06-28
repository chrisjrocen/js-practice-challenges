// Function to find the
function findSingle(A, ar_size)
{
  
    // Iterate over every element
    for (let i = 0; i < ar_size; i++) {
  
        // Initialize count to 0
        let count = 0;
  
        for (let j = 0; j < ar_size; j++) {
  
            // Count the frequency
            // of the element
            if (A[i] == A[j]) {
                count++;
            }
        }
  
        // if the frequency of the
        // element is one
        if (count == 1) {
            return A[i];
        }
    }
  
    // if no element exist at most once
    return -1;
}
  
// Driver code
let ar = [ 2, 3, 5, 4, 5, 3, 4 ];
let n = 7;
  
// Function call
document.write("Element occurring once is "
               + findSingle(ar, n));