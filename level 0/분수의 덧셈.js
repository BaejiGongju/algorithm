function solution(denum1, num1, denum2, num2) {
    // 분모
    const denum = denum2 * num1 + denum1 * num2;
    // 분자
    const num = num1 * num2;
  
    // 최대공약수
    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
    const gcd = getGCD(denum, num);
  
    return [denum / gcd, num / gcd];
}



// 최대공약수 구하기

// function getGCD(a, b) {
//     if (b === 0) {
//         return a;
//     } else {
//         return getGCD(b, a % b);
//     }
// }

// console.log(getGCD(4,2)) 
// '2' 출력
