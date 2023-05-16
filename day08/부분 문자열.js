function solution(str1, str2) {
  if (str2.indexOf(str1) !== -1) {
    return 1;
  } else {
    return 0;
  }
}

const solution = (str1, str2) => (str2.includes(str1) ? 1 : 0);
