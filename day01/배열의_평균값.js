function solution(numbers) {
  const sum = numbers.reduce((a, c) => a + c) / numbers.length;

  return sum;
}
