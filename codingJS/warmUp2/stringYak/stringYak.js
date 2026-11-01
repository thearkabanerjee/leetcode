function stringYak(str) {
  let result = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'y' && str[i + 2] == 'k') {
      i += 2
    } else {
      result += str[i]
    }
  }

  return result
}
