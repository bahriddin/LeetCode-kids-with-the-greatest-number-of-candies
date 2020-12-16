/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    
    function isTrue(arg){
        if (arg + extraCandies < max)
            return false;
        else 
            return true;
    }
    
    return candies.map(isTrue);
    
};