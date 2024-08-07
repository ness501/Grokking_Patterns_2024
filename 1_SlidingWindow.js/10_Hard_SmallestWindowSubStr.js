/* Problem Challenge #3 - Smallest Window Containing Substring (hard)

- Given a string and a pattern, find the smallest substring in the given string which has all the character occurrences of the given pattern.

Input: String="aabdec", Pattern="abc"    Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Input: String="aabdec", Pattern="abac"   Output: "aabdec"
Explanation: The smallest substring having all character occurrences of the pattern is "aabdec"

Input: String="abdbca", Pattern="abc"    Output: "bca"
Explanation: The smallest substring having all characters of the pattern is "bca".

Input: String="adcad", Pattern="abc"     Output: ""
Explanation: No substring in the given string has all characters of the pattern.

Time O(N + M) - where ‘N’ and ‘M’ are the number of characters in the input string and the pattern, respectively.

Space O(M) - since, in the worst case, the whole pattern can have distinct characters that will go into the HashMap. In the worst case, we also need O(N) space for the resulting substring, which will happen when the input string is a permutation of the pattern.
*/

const find_substring = function (str, pattern) {
    const charMap = {};
    let windowStart = 0,
      matched = 0,
      subStrStart = 0,
      minLength = str.length + 1; //a length greater than the actual string, if the length never changes then we know there is no substring with the pattern
  
    for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i];
      charMap[char] = charMap[char] + 1 || 1;
    }
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      let rightChar = str[windowEnd];
      if (rightChar in charMap) {
        charMap[rightChar]--;
        //if after subtraction it is 0 or greater, then that just means there are multiple val of that char
        if (charMap[rightChar] >= 0) {
          matched += 1;
        }
      }
      //shrink window if possible, if match removed, jump out of while loop
      while (matched === pattern.length) {
        if (minLength > windowEnd - windowStart + 1) {
          minLength = windowEnd - windowStart + 1;
          subStrStart = windowStart; //first idx of where pattern starts?
        }
        let leftChar = str[windowStart];
        if (leftChar in charMap) {
          if (charMap[leftChar] === 0) {
            matched--; //remove match since its kicked out of window
          }
          charMap[leftChar] += 1; //add char back to map
        }
        windowStart++;
      }
    }
    if (minLength > str.length) return '';
    return str.substring(subStrStart, subStrStart + minLength);
  };
  
  // console.log(find_substring('aabdec', 'abc')); // abdec
  // console.log(find_substring('aabdec', 'abac')); // aabdec
  // console.log(find_substring('abdbca', 'abc')); // bca
  // console.log(find_substring('adcad', 'abc')); // ''

/* Problem Challenge #3 - Smallest Window Containing Substring (hard)

- Given a string and a pattern, find the smallest substring in the given string which has all the character occurrences of the given pattern.

Input: String="aabdec", Pattern="abc"    Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Input: String="aabdec", Pattern="abac"   Output: "aabdec"
Explanation: The smallest substring having all character occurrences of the pattern is "aabdec"

Input: String="abdbca", Pattern="abc"    Output: "bca"
Explanation: The smallest substring having all characters of the pattern is "bca".

Input: String="adcad", Pattern="abc"     Output: ""
Explanation: No substring in the given string has all characters of the pattern.

Time O(N + M) - where ‘N’ and ‘M’ are the number of characters in the input string and the pattern, respectively.

Space O(M) - since, in the worst case, the whole pattern can have distinct characters that will go into the HashMap. In the worst case, we also need O(N) space for the resulting substring, which will happen when the input string is a permutation of the pattern.
*/

const findSubstring = function (str, pattern) {
  
    // code your answer 

  };
  

// Time: 
// Space:  
console.log(findSubstring('aabdec', 'abc')); // abdec
console.log(findSubstring('aabdec', 'abac')); // aabdec
console.log(findSubstring('abdbca', 'abc')); // bca
console.log(findSubstring('adcad', 'abc')); // ''