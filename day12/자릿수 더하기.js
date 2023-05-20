function solution(n) {
  let sum = 0;
  let num = Math.abs(n);

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
