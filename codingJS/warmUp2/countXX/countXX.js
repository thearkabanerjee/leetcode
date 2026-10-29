function countXX(str) {
  let counter = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] + str[i - 1] == 'xx') {
      counter += 1;
    }
  }


  return counter
}
