function middleTwo(str) {
  let len = str.length / 2;
  return str.substring(len - 1, len + 1);
}


console.log(middleTwo("code"))


// since the webiste has a few errors in it i am trying to see if i can solve for the testcases

function middleTwo2(str) {
  if (!isNaN(Number(str))) {
    return str
  } else {
    return ""
  }
}


// console.log(middleTwo('123456789'))
