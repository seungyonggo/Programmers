// function solution(num_list) {
//   let sumOdd = 0;
//   let sumEven = 0;

//   for (let i = 0; i < num_list.length; i++) {
//     if (num_list[i] % 2 === 0) {
//       sumEven += num_list[i];
//     } else {
//       sumOdd += num_list[i];
//     }
//   }

//   return parseInt(sumOdd.toString() + sumEven.toString());
// }

// 못풀었음

function solution(num_list) {
  const { odds, evens } = num_list.reduce(
    ({ odds, evens }, num) => {
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
      return { odds, evens };
    },
    { odds: [], evens: [] }
  );
  return Number(odds.join("")) + Number(evens.join(""));
}
