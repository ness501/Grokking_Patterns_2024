/*  Smallest Subarray With a Greater Sum (medium)

Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.


Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1]
or [1, 1, 6].

Time O(N) - The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N) -> O(N)

Space O(1)
*/

const smallest_subarray_sum = function (s, arr) {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];
      while (windowSum >= s) {
        //add 1 to include the current i
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart];
        windowStart++;
      }
    }
    if (minLength === Infinity) return 0;
    return minLength;
  };
  
  // console.log(smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])); // 2
  // console.log(smallest_subarray_sum(7, [2, 1, 5, 2, 8])); // 1
  // console.log(smallest_subarray_sum(8, [3, 4, 1, 1, 6])); // 3


/*  Smallest Subarray With a Greater Sum (medium)

Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.


Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1]
or [1, 1, 6].

Time O(N) - The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N) -> O(N)

Space O(1)
*/

const smallestSubArraySum = function (s, arr) {
  
  // code your answer

};

// Time: 
// Space:  
console.log(smallestSubArraySum(7, [2, 1, 5, 2, 3, 2])); // 2
console.log(smallestSubArraySum(7, [2, 1, 5, 2, 8])); // 1
console.log(smallestSubArraySum(8, [3, 4, 1, 1, 6])); // 3