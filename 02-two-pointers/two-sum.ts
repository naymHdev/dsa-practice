/* 
You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    const difference = target - number!;

    if (numMap.has(difference)) return [numMap?.get(difference), i];

    numMap.set(number, i);
  }
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
