function stringSplosion(str) {
  let retword = ""
  for (let i = 0; i < str.length; i++) {
    retword += str.slice(0, i + 1)
  }
  return retword
}
