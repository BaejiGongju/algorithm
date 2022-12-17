function solution(n) {
  let answer = 0;
  let string = n.toString();

  for (let i = 0; i < string.length; i++) {
    answer += parseInt(string[i]);
  }

  return answer;
}
