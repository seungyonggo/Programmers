function solution(num_list) {
  let evencount = 0;
  let oddcount = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      evencount++;
    } else {
      oddcount++;
    }
  }
  return [evencount, oddcount];
}
