/**
 * function longestCommonPrefix(strs):
    if length of strs is 0:
        return ""  // Return an empty string if the array is empty
    
    for i = 0 to length of first string in strs:
        char = character at index i of the first string
        
        for j = 1 to length of strs:
            if i is equal to length of strs[j] or strs[j][i] is not equal to char:
                // If the characters don't match or we reach the end of a string, return the common prefix found so far
                return substring of strs[0] from index 0 to i
    
    return strs[0]  // Return the first string if all characters match

 */

/**
 * 
 * @param {*} strs 
 * @returns 
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
      return ""; // Return an empty string if the array is empty
    }
  
    // Iterate over the characters of the first string
    for (let i = 0; i < strs[0].length; i++) {
      const char = strs[0][i];
  
      // Compare the character with the corresponding character of the other strings
      for (let j = 1; j < strs.length; j++) {
        if (i === strs[j].length || strs[j][i] !== char) {
          // If the characters don't match or we reach the end of a string, return the common prefix found so far
          return strs[0].substring(0, i);
        }
      }
    }
  
    return strs[0]; // Return the first string if all characters match
  }
  
  // Example usage
  const strs = ["flower", "flow", "flight"];
  const commonPrefix = longestCommonPrefix(strs);
  console.log(commonPrefix);
  