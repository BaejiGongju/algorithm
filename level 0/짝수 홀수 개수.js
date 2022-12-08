function solution(num_list) {
    const evenNumLength = num_list.filter(n => n % 2 === 0).length;
    return [evenNumLength, num_list.length - evenNumLength];
}
