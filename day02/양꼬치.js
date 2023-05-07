function solution(n, k) {
  const sheepPrice = 12000; // 양꼬치 1인분 가격
  const drinkPrice = 2000; // 음료수 1개 가격
  const numFreeDrinks = Math.floor(n / 10); // 무료 음료수 개수
  const totalPrice = n * sheepPrice + (k - numFreeDrinks) * drinkPrice;
  return totalPrice;
}
