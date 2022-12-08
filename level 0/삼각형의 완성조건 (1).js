function solution(sides) {
  const max = Math.max(...sides);

  // .reduce(func, initialValue)
  return max < sides.reduce((prevVal, currVal) => prevVal + currVal, 0) - max
    ? 1
    : 2;
}
