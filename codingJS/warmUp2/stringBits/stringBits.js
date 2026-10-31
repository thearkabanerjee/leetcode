function stringBits(str) {
  let retword = ""
  for (let i = 0; i < str.length; i += 2) {
    retword += str[i]
  }

  return retword
}
