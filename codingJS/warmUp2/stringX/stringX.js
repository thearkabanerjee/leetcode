function stringX(str) {
  let result = ""
  if (str.length > 1) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] != 'x') {
        result += str[i]
      } else if (str[i] == 'x' && (i == 0 || i == str.length - 1)) {
        result += str[i]
      }
    }
  } else if (str.length == 1) {
    result = 'xx'
  } else {
    result = str
  }


  return result
}


console.log(stringX('x'))
