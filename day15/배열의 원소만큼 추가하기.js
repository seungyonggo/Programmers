function solution(arr) {
  const X = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < element; j++) {
      X.push(element);
    }
  }
  return X;
}
