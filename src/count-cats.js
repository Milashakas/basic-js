const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let count=0;
  for (let i=0;i<=arr.length-1;i++) {
for (let b=0;b<=arr[i].length-1;b++){
  if (arr[i][b]=='^^'){
    count ++
  }
}
  }

  return count
}

module.exports = {
  countCats
};

