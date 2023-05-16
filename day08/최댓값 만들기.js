function solution(numbers) {
  var answer = numbers.sort(function (a, b) {
    return b - a;
  });

  return answer[0] * answer[1];
}
