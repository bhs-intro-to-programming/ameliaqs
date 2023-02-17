const getX = (object) => { return object.x }
const point = (x, y) => {
  let point = { 'x': x, 'y': y }
  return point
}
const emptyObject = () => {
  let emptyObject = {}
  return emptyObject
}
const distance = (object, objectb) = {
  return Math.sqrt((objectb.x - object.x)**2 + (objectb.y - object.y)**2) 
}