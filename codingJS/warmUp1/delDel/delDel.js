function delDel(str) {
  if (str.substring(1, 4) == "del") {
    let result = ""
    for (let i = 0; i < str.length; i++) {
      if (i < 1 || i >= 4) {
        result += str[i]
      }


    }
    return result;
  } else {
    return str
  }
}
