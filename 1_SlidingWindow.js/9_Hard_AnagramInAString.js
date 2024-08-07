/* Problem Challenge #2 - String Anagrams (hard)

- Given a string and a pattern, find all anagrams of the pattern in the given string.

- Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N! permutations (or anagrams) of a string having characters.

- For example, here are the six anagrams of the string “abc”:

  1. abc
  2. acb
  3. bac
  4. bca
  5. cab
  6. cba

- Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Input: String="ppqp", Pattern="pq"      Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Input: String="abbcabc", Pattern="abc"  Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

Time O(N + M) - where ‘N’ and ‘M’ are the number of characters in the input string and the pattern, respectively.
Space O(M) - since, in the worst case, the whole pattern can have distinct characters that will go into the HashMap.
*/

const find_string_anagrams = function (str, pattern) {
    const resultIndices = [],
      charMap = {};
    let windowStart = 0,
      match = 0;
    //add chars to map
    for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i];
      charMap[char] = charMap[char] + 1 || 1;
    }
    // loop through str to compare if chars are a match
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      let rightChar = str[windowEnd];
      // if in map, its a match so add to match and remove from list
      if (rightChar in charMap) {
        // decrement the frequency of matched character
        charMap[rightChar]--;
        if (charMap[rightChar] === 0) {
          match += 1;
        }
      }
      // if we found an anagram, add the starting index
      if (match === pattern.length) resultIndices.push(windowStart);
  
      // slide window
      if (windowEnd >= pattern.length - 1) {
        let leftChar = str[windowStart];
        if (leftChar in charMap) {
          // decrement the matched countbefore putting the character back
          if (charMap[leftChar] === 0) {
            match--;
          }
          // put the character back in hash map
          charMap[leftChar]++;
        }
        windowStart++;
      }
    }
    return resultIndices;
  };
  
  console.log(find_string_anagrams('ppqp', 'pq')); // [1, 2]
  console.log(find_string_anagrams('abbcabc', 'abc')); // [2,3,4]
  console.log(find_string_anagrams('acacaacba', 'abc')); // [5,6]