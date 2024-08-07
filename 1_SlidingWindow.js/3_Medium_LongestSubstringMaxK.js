/* Longest Substring with Maximum K Distinct Characters (medium)

- Given a string, find the length of the longest substring in it with no more than K distinct characters.


Input: String="araaci", K=2  Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1  Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Input: String="cbbebi", K=3  Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

Input: String="cbbebi", K=10  Output: 6
Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

Time O(N) - The outer for loop runs for all elements,
and the inner while loop processes each element only once;
therefore, the time complexity of the algorithm will be O(N+N) => O(N)

Space O(K) - space is size of k
*/

const longest_substring_with_k_distinct = function (str, k) {
    let charFreq = {};
    let windowStart = 0;
    let longestSub = 0;
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      let rightChar = str[windowEnd];
      // store char in hashmap
      charFreq[rightChar] = charFreq[rightChar] + 1 || 1;
      // if num of chars is greater than k
      if (Object.keys(charFreq).length > k) {
        let leftChar = str[windowStart];
        // remove char from hash map
        charFreq[leftChar]--;
        if (charFreq[leftChar] === 0) delete charFreq[leftChar];
        // slide window 1 over
        windowStart++;
      }
      longestSub = Math.max(longestSub, windowEnd - windowStart + 1);
    }
    return longestSub;
  };
  
  // console.log(longest_substring_with_k_distinct('aaaaabcraaci', 2)); // 6
  // console.log(longest_substring_with_k_distinct('araaci', 2)); // 4
  // console.log(longest_substring_with_k_distinct('araaci', 1)); // 2
  // console.log(longest_substring_with_k_distinct('cbbebi', 3)); // 5
  
/* Longest Substring with Maximum K Distinct Characters (medium)

- Given a string, find the length of the longest substring in it with no more than K distinct characters.


Input: String="araaci", K=2  Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1  Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Input: String="cbbebi", K=3  Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

Input: String="cbbebi", K=10  Output: 6
Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".

Time O(N) - The outer for loop runs for all elements,
and the inner while loop processes each element only once;
therefore, the time complexity of the algorithm will be O(N+N) => O(N)

Space O(K) - space is size of k
*/

const longestSubstringWithKDistinct = function (str, k) {

  // code your answer

};


// Time: 
// Space: 
console.log(longestSubstringWithKDistinct('aaaaabcraaci', 2)); // 6
console.log(longestSubstringWithKDistinct('araaci', 2)); // 4
console.log(longestSubstringWithKDistinct('araaci', 1)); // 2
console.log(longestSubstringWithKDistinct('cbbebi', 3)); // 5
