const findFnord = (s) => {
  return s.indexOf('fnord')
}
const stringContains = (s, t) => {
  return s.indexOf(t) > -1
}
const firstAndLast = (s) => s[0] + s[s.length - 1]
const swapFrontAndBack = (s) => s.substring(Math.floor(s.length / 2) - 1) + s.substring(0, Math.floor(s.length / 2) + 1)
