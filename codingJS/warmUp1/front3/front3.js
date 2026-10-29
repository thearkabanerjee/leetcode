function front3(str) {
  let three = str.slice(0, 3);

  let result = "";

  for (let i = 0; i < 3; i++) {
    result += three;
  }

  return result;
}
