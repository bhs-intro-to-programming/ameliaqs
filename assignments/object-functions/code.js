const getX = (object) => { return object.x }
const point = (x, y) => {
  let point = { 'x': x, 'y': y }
  return point
}
const emptyObject = () => {
  let emptyObject = {}
  return emptyObject
}
const distance = (point1, point2) => {
  return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2)
}
const midpoint = (point1, point2) => {
  return { 'x': (point1.x + point2.x) / 2, 'y': (point1.y + point2.y) / 2 }
}
const sumSalaries = (x) => {
  let sum = 0
  for (let i = 0; i < x.length; i++) {
    sum = sum + x[i]['salary']
  }
  return sum
}
const newHighScore = (current, scores) => {
  let x = 0
  for (let i = 0; i < 4; i++) {
    x = scores[i]['score']
  }
  return x
}