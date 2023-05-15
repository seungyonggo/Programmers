function solution(arr) {
  arr.sort((a, b) => a - b);

  var length = arr.length;
  var middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  } else {
    return arr[middleIndex];
  }
}
