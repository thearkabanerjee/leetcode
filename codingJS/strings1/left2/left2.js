function left2(str) {
  return (str.length > 2) ? str.substring(2, str.length) + str.substring(0, 2) : str
}
