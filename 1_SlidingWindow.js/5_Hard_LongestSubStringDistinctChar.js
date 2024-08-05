/* Longest Substring with Distinct Characters (hard)

- Given a string, find the length of the longest substring, which has all distinct characters.

Input: String="aabccbb"  Output: 3
Explanation: The longest substring with distinct characters is "abc".

Input: String="abbbb"    Output: 2
Explanation: The longest substring with distinct characters is "ab".

Input: String="abccde"   Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".

Time O(N) - where ‘N’ is the number of characters in the input 
string.
Space O(1) - where K is the number of distinct characters in the input string.

*/

const non_repeat_substring = function (str) {
    const charIdx = {};
    let longestSub = 0,
      windowStart = 0;
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      let rightChar = str[windowEnd];
      
      if (rightChar in charIdx) {
        // if the current char has already seen, update window start with
        // the greater of the two: window start index OR 
        // slide window one char over from the previously seen char 
        windowStart = Math.max(windowStart, charIdx[rightChar] + 1);
      
      }
      //replace the latest seen char with the current i (windowEnd)
      charIdx[rightChar] = windowEnd;
      //get length of longest string
      longestSub = Math.max(longestSub, windowEnd - windowStart + 1);
    }
    return longestSub;
  };
  
  console.log(non_repeat_substring('aabccbb')); //3
  console.log(non_repeat_substring('abbbb')); //2
  console.log(non_repeat_substring('abccde')); //3
  console.log(non_repeat_substring('abccade')); //4