function solution(my_string, n) {
  if (n >= my_string.length) {
    return my_string;
  } else {
    return my_string.slice(my_string.length - n);
  }
}

// reverse를 사용해서 해결해야할것같음
