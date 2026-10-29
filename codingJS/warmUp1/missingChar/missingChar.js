function missingChar(str, n) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (i != n) {
      newstr += str[i]
    }
  }

  return newstr
}
