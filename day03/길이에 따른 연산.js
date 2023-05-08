function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((acc, curr) => acc + curr);
  } else {
    let product = 1;
    for (let i = 0; i < num_list.length; i++) {
      product *= num_list[i];
    }
    return product;
  }
}
