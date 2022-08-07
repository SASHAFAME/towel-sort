
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length === 0) {
    return [];
  }

  const sortedTowel = [];

  matrix.forEach((arr, index) => {
    if(index % 2 === 0) {
      sortedTowel.push(...arr);
    } else {
      sortedTowel.push(...arr.reverse());
    }

  });

  return sortedTowel;
}
