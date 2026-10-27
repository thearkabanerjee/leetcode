function frontBack(str) {


  if (str.length > 1) {
    let result = (str[str.length - 1] + str.slice(1, str.length - 1) + str[0])
    return result;
  } else {

    return str;
  }

}

console.log(frontBack("eodc"))
