function solution(s) {
  return parseInt(
    s
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
