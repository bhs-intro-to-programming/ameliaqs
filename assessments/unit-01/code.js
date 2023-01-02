// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const averageWeight = (t, n) => t / n
const hypotenuse = (a, b) => Math.sqrt(a ** 2 + b ** 2)
const maxRadius = (w, h) => Math.min(w, h) / 2
const numCircles = (r, w) => Math.floor(w / (2 * r))
const offset = (a, f) => (a - f) / 2
const canSleepIn = (weekday, vacation) => !weekday || vacation
const canGoToProm = (senior, invited, excluded) => (senior && !excluded) || (invited && !excluded)
const getsSpeedingTicket = (s, grouchy) => (s > 65 && grouchy) || (s > 70 && !grouchy)
const moreThanTwiceAsLong = (x, y) => (x / y) > 2
const aFartherThanB = (a, b, c) => Math.abs(a - c) > Math.abs(b - c)
const firstHalf = (s) => s.substring(0, Math.floor(s.length / 2))
const secondHalf = (s) => s.substring(Math.floor(s.length / 2))
const upDown = (s) => s.toUppperCase() + s.toLowerCase()
const everyOther = (s) => s.substring(0, 1) + s.substring(2, 3) + s.substring(4, 5)
const upDownLastCharacter = (s) => s.substring(length - 1).toUpperCase + s.substring(length - 1).toLowerCase
const yesIfEven = (x) => { x % 2 === 0 ? 'yes' : 'no' }
const countXs = (s) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x')
      count++
  }
  return count
}
const timesTable = (n) => {
  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      emit = (i, j, (i * j))
    }
  }
}
const containsX = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x')
      return true
  }
  return false
}
const sumSquares = (x) => {
  for (let i = 0; i < x; i++) {
    x + Math.floor(x - i) ** 2
  }
}