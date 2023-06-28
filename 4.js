// Function to check if given string
// is Palindrome or not
function isPalindrome(s)
{
    // Copy string s char into string a
    let a = s;
    s = s.split('').reverse().join('');
 
    // Check if two string are equal or not
    return s == a;
}
 
// Function to return all Palindrome string
function PalindromicStrings(arr,N)
{
    let ans = [];
 
    // Loop to find palindrome string
    for (let i = 0; i < N; i++) {
 
        // Checking if given string is
        // palindrome or not
        if (isPalindrome(arr[i])) {
 
            // Update answer variable
            ans.push(arr[i]);
        }
    }
    return ans;
}