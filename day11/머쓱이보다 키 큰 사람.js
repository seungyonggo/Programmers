function solution(array, height) {
  var answer = 0;
  array.push(height);
  array.sort((a, b) => a - b);
  for (var i = 0; i < array.length; i++) {
    if (array[i] === height) {
      answer = i;
    }
  }

  return array.length - 1 - answer;
}
