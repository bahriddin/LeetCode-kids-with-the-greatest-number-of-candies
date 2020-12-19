// Problem description: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);

  function isTrue(arg) {
    return arg + extraCandies >= max;
  }

  return candies.map(isTrue);
};
