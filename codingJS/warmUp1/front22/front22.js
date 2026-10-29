function front22(str) {
  if (str.length >= 2) {
    let substr = str.substring(0, 2);

    return (substr + str + substr)
  }
  else if (str.length == 1) {
    let substr = str.substring(0, 1)

    return (substr + str + substr)
  }
  else {
    return str;
  }
}
