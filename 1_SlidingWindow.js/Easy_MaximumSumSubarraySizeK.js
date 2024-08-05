/*  Maximum Sum Subarray of Size K (easy)
- Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const array1 = [2, 1, 5, 1, 3, 2]  k = 3;
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Time O(N) || Space O(1)
*/

const max_sub_array_of_size_k = function (arr, k) {
    let maxSum = 0;
    let windowStart = 0;
    let windowSum = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      //add num entering window
      windowSum += arr[windowEnd];
      //if size of window(k) is met
      if (windowEnd >= k - 1) {
        //subtract 1 bc js arrays are 0 indexed
        maxSum = Math.max(maxSum, windowSum);
        //substract element leaving window
        windowSum -= arr[windowStart];
        //slide window ahead
        windowStart++;
      }
    }
    return maxSum;
  };
  
  console.log('sum:', max_sub_array_of_size_k([2, 1, 5, 4], 3)); //10
  console.log('sum:', max_sub_array_of_size_k([2, 1, 5, 1, 3, 2], 3)); //9
  console.log('sum:', max_sub_array_of_size_k([2, 3, 4, 1, 5], 2)); //7