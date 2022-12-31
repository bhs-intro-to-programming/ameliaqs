/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */
const XlineOfCircles = (r) => {
  const numCircles = Math.floor(width / (2 * r));
  const totalWidth = numCircles * 2 * r;
  const gap = (width - totalWidth) / 2;
  for (let x = gap + r; x <= (width - gap) - r; x += 2 * r)
    drawFilledCircle(x, height / 2, r, 'red')
}

const lineOfCircles = (r) => {
  const numCircles = Math.floor(width / (2 * r));
  const totalWidth = numCircles * 2 * r;
  const gap = (width - totalWidth) / 2;
  for (let i = 0; i < numCircles; i++) {
    drawFilledCircle(gap + r + (i * 2 * r), height / 2, r, 'red')
  }
}
// lineOfCircles(44)
