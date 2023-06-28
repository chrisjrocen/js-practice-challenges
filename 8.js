/**
 * function findMajorityElement(nums):
    majorityElement = nums[0]  // initialize the majority element as the first element
    count = 1  // initialize the count as 1
  
    // traverse through the array starting from the second element
    for i = 1 to length of nums:
        if count is 0:
            // update the majority element when the count becomes zero
            majorityElement = nums[i]
        
        if nums[i] is equal to majorityElement:
            // increment the count if the current element is the majority element
            count++
        else:
            // decrement the count if the current element is not the majority element
            count--
    
    return majorityElement

 */


/**
 * 
 * @param {*} nums 
 * @returns 
 */
function findMajorityElement(nums) {
    let majorityElement = nums[0];
    let count = 1;
  
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) {
        majorityElement = nums[i];
      }
  
      if (nums[i] === majorityElement) {
        count++;
      } else {
        count--;
      }
    }
  
    return majorityElement;
  }
  
  // Example usage
  const nums = [2, 2, 1, 1, 1, 2, 2];
  const majorityElement = findMajorityElement(nums);
  console.log(majorityElement);
  