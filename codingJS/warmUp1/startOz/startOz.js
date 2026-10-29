function startOz(str) {
  if (str.length >= 2) {
    if (str.substring(0, 2) == "oz") {
      return "oz"
    } else if (str[0] == 'o') {
      return 'o'
    }
    else if (str[1] == 'z') {
      return 'z'
    }
    else {
      return ""
    }
  }
  else {
    if (str[0] == 'o') {
      return 'o'
    }
    else {
      return ''
    }
  }
}
