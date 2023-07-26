function solution(arr1, arr2) {
  const sum1 = arr1.reduce((acc, num) => acc + num, 0);
  const sum2 = arr2.reduce((acc, num) => acc + num, 0);

  if (arr1.length !== arr2.length) {
    return arr2.length > arr1.length ? -1 : 1;
  } else {
    if (sum1 !== sum2) {
      return sum2 > sum1 ? -1 : 1;
    } else {
      return 0;
    }
  }
}
