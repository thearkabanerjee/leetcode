function doubleX(str) {
  let result = false
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'x') {
      if (str[i + 1] == 'x') {
        result = true
        break;
      }
      else {
        break
      }
    }
  }

  return result
}
