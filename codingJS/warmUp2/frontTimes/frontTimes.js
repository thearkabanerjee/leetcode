function frontTimes(str, n) {
  let restr = ""
  if (str.length >= 3) {
    let substr = str.substring(0, 3);
    for (let i = 0; i < n; i++) {
      restr += substr
    }
  } else {
    for (let i = 0; i < n; i++) {
      restr += str
    }
  }

  return restr
}
