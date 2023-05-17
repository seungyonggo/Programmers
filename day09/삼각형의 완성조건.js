function solution(sides) {
  const line = sides.sort((a, b) => a - b);
  if (line[0] + line[1] <= line[2]) {
    return 2;
  } else if (line[0] + line[1] > line[2]) {
    return 1;
  }
}
