function solution(array, n) {
  let count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === n) {
      count += 1;
    }
  }
  return count;
}
