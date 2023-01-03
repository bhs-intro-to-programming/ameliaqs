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

const evens = (x) => {
  let newArray = []
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0)
      newArray.push(x[i])
  }
  return newArray
}

const anyOverOneHundred = (x) => {
  for (let i = 0; i < x.length; i++) {
    if (x[i] > 100)
    let y = 'true'
  }
  return y
}