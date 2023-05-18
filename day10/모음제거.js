function solution(my_string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    const currentChar = my_string[i].toLowerCase();

    if (!vowels.includes(currentChar)) {
      result += my_string[i];
    }
  }

  return result;
}
