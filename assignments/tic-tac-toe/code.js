// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

//registerOnclick((x, y) => {
//  drawText('X', x, y, 'black', Math.min(width, height) * 0.3);
//});

for (let i = 1; i <= 3; i++) {
  drawLine(i * width / 3, 0, i * width / 3, height, 'black', 1)
  drawLine(0, i * height / 3, width, i * height / 3, 'black', 1)
}

const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

const rowWinner = (r) => {
  return board[r][0] === board[r][1] && board[r][0] === board[r][2]
}
const columnWinner = (c) => {
  return board[0][c] === board[1][c] && board[0][c] === board[2][c]
}

let i = 0
registerOnclick((x, y) => {
  let c = Math.floor(x / (width / 3))
  let xx = c * (width / 3) + (width / 6) - (width / 25)
  let r = Math.floor(y / (height / 3))
  let yy = r * (height / 3) + (height / 6) + (height / 10)
  let marker = i % 2 === 0 ? 'X' : 'O'

  if (board[r][c] === "") {
    drawText(marker, xx, yy, 'black', Math.min(width, height) * 0.3);
    board[r][c] = marker
    if (rowWinner(r)) {
      console.log('row ' + r)
      drawLine((width / 6), 100, 5 * (width / 6), 100, 'black', 1)
    }
    if (columnWinner(c)) {
      console.log('col ' + c)
    }
    i++
  }
});
