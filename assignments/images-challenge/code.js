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

const alternatingCircles = (r) => {

  const numCircles = Math.floor(width / (2 * r));
  //const numBlueCircles = 1 + Math.floor(width / (2 * r)) / 2;
  const totalWidth = numCircles * 2 * r;
  const gap = (width - totalWidth) / 2;
  for (let i = 0; i < numCircles; i++) {
    const color = (i % 2) === 0 ? 'blue' : 'red';
    drawFilledCircle(gap + r + (i * 2 * r), height / 2, r, color);
  }
}
// alternatingCircles(44)

const concentricCircles = (n) => {

  const MaxR = height / 2;
  const difference = MaxR / n;
  for (let i = 0; i < n; i++) {
    if ((i % 2) === 0) {
      drawFilledCircle(width / 2, height / 2, MaxR - difference * i, 'blue');
    } else {
      drawFilledCircle(width / 2, height / 2, MaxR - difference * i, 'red');
    }

  }
}
// concentricCircles(11)

const Xcheckerboard = (n) => {
  const side = height / n;
  const boardWidth = side * n
  const gap = (width - boardWidth) / 2
  for (let r = 0; r < n; r++) {
    if ((r % 2 === 0)) {
      for (let c = 0; c < n; c++) {
        const color = (c % 2) === 0 ? 'blue' : 'red';
        drawFilledRect(gap + side * c, 0 + side * r, side, side, color)
      }
    }
    else {
      for (let c = 0; c < n; c++) {
        const color = (c % 2) === 0 ? 'red' : 'blue';
        drawFilledRect(gap + side * c, 0 + side * r, side, side, color)

      }
    }
  }
}

const checkerboard = (n) => {
  const side = 0.8 * height / n;
  const boardWidth = side * n
  const left = (width - boardWidth) / 2
  const top = (height - boardWidth) / 2
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const color = (c + r) % 2 === 0 ? 'blue' : 'red';
      drawFilledRect(left + side * c, top + side * r, side, side, color)
    }
  }
}
// checkerboard(8)

const notReallyCurved = (n) => {
  const difference = Math.min(width, height) / n
  const frameSide = difference * n
  for (let i = 0; i < n; i++) {
    drawLine(0, 0 + i * difference, 0 + i * difference, frameSide, 'black', 1)
  }
}
// notReallyCurved(20)

const fillWithCircles = (s) => {
  const d = 2 * s
  const numColumns = Math.floor(width / d)
  const numRows = Math.floor(height / d)
  const left = (width - numColumns * d) / 2
  const top = (height - numRows * d) / 2
  for (let r = 0; r < numRows; r++)
    for (let c = 0; c < numColumns; c++) {
      drawCircle(s + left + c * d, s + top + r * d, s, 'blue', 1)
    }
}
// fillWithCircles(30)

const fillWithCirlcesRandomlyFilled = (s, p) => {
  const d = 2 * s
  const numColumns = Math.floor(width / d)
  const numRows = Math.floor(height / d)
  const left = (width - numColumns * d) / 2
  const top = (height - numRows * d) / 2
  for (let r = 0; r < numRows; r++)
    for (let c = 0; c < numColumns; c++) {
      const fn = Math.random() < p ? drawFilledCircle : drawCircle;
      fn(s + left + c * d, s + top + r * d, s, 'blue', 1);
      // if (Math.random() < p) {
      //   drawFilledCircle(s + left + c * d, s + top + r * d, s, 'blue', 1);
      // } else {
      //   drawCircle(s + left + c * d, s + top + r * d, s, 'blue', 1);
      // }
    }
}
// fillWithCirlcesRandomlyFilled(17, 0.23)

const XsquareOfCircles = (s) => {
  const d = 2 * s
  const numCircles = Math.min(width, height) / d
  const left = (width - numCircles * d) / 2
  const top = (height - numCircles * d) / 2
  for (let r = 0; r < numCircles; r++) {
    for (let c = 0; c < numCircles; c++) {
      const gap = (r === 0) || (r === numCircles - 1) || (c === 0) || (c === numCircles - 1) ? c * d : (numCircles - 1) * d;
      drawCircle(s + left + gap, s + top + r * d, s, 'blue', 1)
    }
  }
}


const YsquareOfCircles = (s) => {
  const d = 2 * s
  const numCircles = Math.min(width, height) / d
  const left = (width - numCircles * d) / 2
  const top = (height - numCircles * d) / 2
  const gap = (numCircles - 1) * d
  for (let r = 0; r < numCircles; r++) {
    if (r === 0) {
      for (let c = 0; c < numCircles; c++) {
        drawCircle(s + left + c * d, s + top + r * d, s, 'blue', 1);
      }
    } else {
      if (r === numCircles - 1) {
        for (let c = 0; c < numCircles; c++) {
          drawCircle(s + left + c * d, s + top + r * d, s, 'blue', 1);
        }
      } else {
        for (let c = 0; c < 2; c++) {
          drawCircle(s + left + c * gap, s + top + r * d, s, 'blue', 1);
        }
      }
    }
  }
}

const squareOfCircles = (s) => {
  const d = 2 * s
  const numCircles = Math.min(width, height) / d
  const left = (width - numCircles * d) / 2
  const top = (height - numCircles * d) / 2
  const gap = (numCircles - 1) * d
  for (let r = 0; r < numCircles; r++)
    for (let c = 0; c < numCircles; c++) {
      const x = 0 < r < (numCircles - 1) ? s + left + c * gap : s + left + c * d;
      drawCircle(x, s + top + r * d, s, 'blue', 1);
    }
}
squareOfCircles(25)