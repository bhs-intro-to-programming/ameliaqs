const countTens = (x) => {
  let count = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 10)
    count++
  }
  return count
}