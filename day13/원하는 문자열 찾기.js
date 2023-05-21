function solution(myString, pat) {
  const lowercaseMyString = myString.toLowerCase();
  const lowercasePat = pat.toLowerCase();

  return lowercaseMyString.includes(lowercasePat) ? 1 : 0;
}
