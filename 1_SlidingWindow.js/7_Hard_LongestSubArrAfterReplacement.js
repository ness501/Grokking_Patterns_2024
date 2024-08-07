/* Longest Subarray with Ones after Replacement (hard)

- Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2   
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

Time O(N) - where ‘N’ is the count of numbers in the input array.
Space O(1)
*/

const length_of_longest_ones_subarray = function (arr, k) {
    let windowStart = 0,
      maxLength = 0,
      maxOnesCount = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      if (arr[windowEnd] === 1) {
        maxOnesCount += 1;
      }
      if (windowEnd - windowStart + 1 - maxOnesCount > k) {
        if (arr[windowStart] === 1) {
          maxOnesCount--;
        }
        windowStart++;
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  };
  
  // console.log(
  //   length_of_longest_ones_subarray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
  // ); // 6
  // console.log(
  //   length_of_longest_ones_subarray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
  // ); // 9


/* Longest Subarray with Ones after Replacement (hard)

- Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2   
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

Time O(N) - where ‘N’ is the count of numbers in the input array.
Space O(1)
*/

const lengthOfLongestOnesSubarray = function (arr, k) {

  // code your answer 

};


// Time: 
// Space: 
console.log(
  lengthOfLongestOnesSubarray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)
); // 6
console.log(
  lengthOfLongestOnesSubarray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
); // 9