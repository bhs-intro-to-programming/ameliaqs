const findFnord = (s) => {
  return s.indexOf('fnord')
}
const stringContains = (s, t) => {
  return s.indexOf(t) > -1
}
const firstAndLast = (s) => s[0] + s[s.length - 1]
const swapFrontAndBack = (s) => s.substring(Math.floor(s.length / 2)) + s.substring(0, Math.floor(s.length / 2))
const simplePigLatin = (s, n) => s.substring(n) + s.substring(0, n) + 'ay'
const isAllUpperCase = (s) => {
  return s.toUpperCase() === s
}
const sameIgnoringCase = (s, t) => {
  return s.toLowerCase() == t.toLowerCase()
  // Is there a better way to do this?
}
const firstHalf = (s) => s.substring(0, Math.floor(s.length / 2))
const secondHalf = (s) => s.substring(Math.floor(s.length / 2))
const upDown = (s) => s.toUpperCase() + s.toLowerCase()
const everyOther = (s) => s[0] + s[2] + s[4]
const upDownLastCharacter = (s) => upDown(s.substring(s.length - 1))
const firstName = (s) => s.substring(0, s.indexOf(' '))
const lastName = (s) => s.substring (s.indexOf(' ') + 1)
const concatenate = (s, t) => s + t
const firstCharacter = (s) => s[]