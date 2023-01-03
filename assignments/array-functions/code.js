const countTens = (x) => {
  let count = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 10)
      count++
  }
  return count
}
const sum = (x) => {
  let sum = 0
  for (let i = 0; i < x.length; i++) {
    sum = sum + x[i]
  }
  return sum
}