const getX = (object) => { return object.x }
const point = (x, y) => {
  let point = { 'x': x, 'y': y }
  return point
}
const emptyObject = () => {
  let emptyObject = {}
  return emptyObject
}
const distance = (a, b) => { 
  return Math.sqrt((b.x - a.x)**2 + (b.y - a.y)**2)}