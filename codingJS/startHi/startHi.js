function startHi(str) {
  if (str.substring(0, 3) == "hi " || (str.length == 2 && str == "hi")) {
    return true
  }
  else {
    return false;
  }

}
