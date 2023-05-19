function solution(my_string, n) {
  return Array.from(my_string, (ch) => ch.repeat(n)).join("");
}
