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
  let max = current
  for (let i = 0; i < scores.length; i++) {
    if (scores[i]['score'] > max) {
      max = scores[i]['score'];
    }
  }
  return max
}
const summarizeBooks = (books) => {
  let titles = []
  let pages = 0
  for (let i = 0; i < books.length; i++) {
    titles[i] = books[i]['title']
    pages = pages + books[i]['pages']
  }
  let summary = { 'titles': titles, 'pages': pages }
  return summary
}