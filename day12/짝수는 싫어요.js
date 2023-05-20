function solution(n) {
  const oddNumbers = [];

  for (let i = 1; i <= n; i += 2) {
    oddNumbers.push(i);
  }

  return oddNumbers;
}
