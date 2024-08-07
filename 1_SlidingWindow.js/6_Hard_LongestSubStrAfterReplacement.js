/* Longest Substring with Same Letters after Replacement (hard)

- Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

Input: String="aabccbb", k=2    Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".

Input: String="abbcb", k=1      Output: 4
Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".

Input: String="abccde", k=1     Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

Time O(N) - where ‘N’ is the number of letters in the input string.

Space O(1) - As we expect only the lower case letters in the input string, we can conclude that the space complexity will be O(26) to store each letter’s frequency in the HashMap, which is asymptotically equal to O(1).
*/

const length_of_longest_substring = function (str, k) {
    let charFreq = {},
      windowStart = 0,
      maxLength = 0,
      maxRepeatCharCount = 0;
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      let rightChar = str[windowEnd];
      charFreq[rightChar] = charFreq[rightChar] + 1 || 1;
      maxRepeatCharCount = Math.max(maxRepeatCharCount, charFreq[rightChar]);
      // Current window size is from windowStart to windowEnd, overall we have a letter which is
      // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
      // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
      // if the remaining letters are more than 'k', it is time to shrink the window as we
      // are not allowed to replace more than 'k' letters
      if (windowEnd - windowStart + 1 - maxRepeatCharCount > k) {
        let leftChar = str[windowStart];
        charFreq[leftChar]--;
        windowStart++;
      }
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
  };
  
  // console.log(length_of_longest_substring('aabccbb', 2)); // 5
  // console.log(length_of_longest_substring('abbcb', 1)); // 4
  // console.log(length_of_longest_substring('abccde', 1)); // 3


/* Longest Substring with Same Letters after Replacement (hard)

- Given a string with lowercase letters only, if you are allowed to replace no more than k letters with any letter, find the length of the longest substring having the same letters after replacement.

Input: String="aabccbb", k=2    Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".

Input: String="abbcb", k=1      Output: 4
Explanation: Replace the 'c' with 'b' to have the longest repeating substring "bbbb".

Input: String="abccde", k=1     Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

Time O(N) - where ‘N’ is the number of letters in the input string.

Space O(1) - As we expect only the lower case letters in the input string, we can conclude that the space complexity will be O(26) to store each letter’s frequency in the HashMap, which is asymptotically equal to O(1).
*/

const lengthOfLongestSubstring = function (str, k) {

  // code your answer

};


// Time: 
// Space: 
console.log(lengthOfLongestSubstring('aabccbb', 2)); // 5
console.log(lengthOfLongestSubstring('abbcb', 1)); // 4
console.log(lengthOfLongestSubstring('abccde', 1)); // 3


