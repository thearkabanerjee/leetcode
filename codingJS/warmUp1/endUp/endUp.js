function endUp(str) {
  if (str.length >= 4) {
    return (str.slice(0, str.length - 3) + str.slice(str.length - 3, str.length).toUpperCase())
  } else if (str.length <= 3) {
    return (str.toUpperCase())
  }
}
