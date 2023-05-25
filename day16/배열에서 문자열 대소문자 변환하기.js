function solution(strArr) {
  const result = strArr.map((str, index) => {
    if (index % 2 === 0) {
      return str.toLowerCase();
    } else {
      return str.toUpperCase();
    }
  });

  return result;
}
