function extraEnd(str) {
  let result = ""
  let substr = str.substring(str.length - 2, str.length)

  for (let i = 0; i < 3; i++) {
    result += substr;
  }

  return result
}
