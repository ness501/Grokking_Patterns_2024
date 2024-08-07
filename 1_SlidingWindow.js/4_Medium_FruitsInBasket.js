/* Fruits into Basket (medium)

- You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

- You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

1. Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
2. You can start with any tree, but you can’t skip a tree once you have started.
3. You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

- Write a function to return the maximum number of fruits in both baskets.

Input: Fruit=['A', 'B', 'C', 'A', 'C']  Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']  Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C'] 

TIME - O(N) & SPACE - O(1)
*/

const fruits_into_baskets = function (fruits) {
    const fruitFreq = {};
    let windowStart = 0,
      maxFruit = 0;
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
      let rightFruit = fruits[windowEnd];
      fruitFreq[rightFruit] = fruitFreq[rightFruit] + 1 || 1;
      if (Object.keys(fruitFreq).length > 2) {
        let leftFruit = fruits[windowStart];
        fruitFreq[leftFruit]--;
        if (fruitFreq[leftFruit] === 0) delete fruitFreq[leftFruit];
        windowStart++;
      }
      maxFruit = Math.max(maxFruit, windowEnd - windowStart + 1);
    }
    return maxFruit;
  };
  
  // console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])); // 3
  // console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])); // 5


/* Fruits into Basket (medium)

- You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

- You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

1. Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
2. You can start with any tree, but you can’t skip a tree once you have started.
3. You will pick exactly one fruit from every tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

- Write a function to return the maximum number of fruits in both baskets.

Input: Fruit=['A', 'B', 'C', 'A', 'C']  Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']  Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C'] 

TIME - O(N) & SPACE - O(1)
*/

const fruitsIntoBaskets = function (fruits) {
 
  // code your answer 

};


// Time: 
// Space: 
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])); // 3
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C'])); // 5