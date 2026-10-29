function close10(a, b) {
  let reB = Math.abs(10 - b)
  let reA = Math.abs(10 - a)
  if (reA == reB) {
    return 0
  } else {
    if (Math.min(reA, reB) == reA) {
      return a
    }
    else {
      return b
    }
  }
}
