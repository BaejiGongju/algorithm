function solution(n) {
    // n과 6의 최소공배수를 6으로 나눈 값을 리턴
    
    let lcm = 1;

    while (true) {
        if (lcm % 6 == 0 && lcm % n == 0) {
            break;
        }
        lcm++;
    }
    return lcm / 6;
}
