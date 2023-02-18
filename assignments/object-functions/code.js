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
  return point1.x + point2.x
}