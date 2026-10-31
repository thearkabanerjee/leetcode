function stringMatch(a, b) {
  let count = 0;

  for (let i = 1; i < a.length; i++) {
    if (a[i - 1] + a[i] == b[i - 1] + b[i]) {
      count++
    }
  }

  return count
}
