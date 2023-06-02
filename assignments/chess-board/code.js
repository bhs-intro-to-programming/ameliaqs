const WHITE_KING = '♔';
const WHITE_QUEEN = '♕';
const WHITE_ROOK = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN = '♙';
const BLACK_KING = '♚';
const BLACK_QUEEN = '♛';
const BLACK_ROOK = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN = '♟';

// Example of drawing one of the pieces
// drawText(WHITE_KING, width / 2, height / 2, 'black', 64);

// set dimensions
const board = Math.min(width, height)
const s = board / 8
const sideGap = (width - board) / 2
const topGap = (height - board) / 2

// draw board and pieces
const pieces = Array(8).fill().map(() => Array(8).fill(''))
let row0 = [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_QUEEN, BLACK_KING, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK]
let row7 = [WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_QUEEN, WHITE_KING, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK]
for (let i = 0; i < 8; i++) {
  pieces[1][i] = BLACK_PAWN
  pieces[6][i] = WHITE_PAWN
}
for (let i = 0; i < 8; i++) {
  pieces[0][i] = row0[i]
  pieces[7][i] = row7[i]
}
const drawBoard = () => {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const color = (r + c) % 2 === 0 ? 'beige' : 'black'
      drawFilledRect(sideGap + (s * c), topGap + (s * r), s, s, color)
      drawText(pieces[r][c], sideGap + (s * c), topGap + (s * (r + 1)), 'grey', 64)
    }
  }
}

let selected = null;
let move = null

// say if white pawn move is legal (moving one space forward)
const whitePawn = (move, selected) => {
  if ((move.row + 1) === selected.row) {
    console.log('true')
    return true
  } else {
    console.log('false')
    console.log(move.row + 1)
    return false
  }
}

registerOnclick((x, y) => {
  let c = Math.floor((x - sideGap) / s)
  let r = Math.floor((y - topGap) / s)
  if (selected === null) {
    selected = { row: r, col: c };
  } else {
    move = { row: r, col: c };
    console.log('s' + selected.row + '; m' + move.row)
    pieces[r][c] = pieces[selected.row][selected.col]
    pieces[selected.row][selected.col] = ''

    selected = null
    drawBoard()
  }

  let highlightWidth = s / 2
  if (pieces[r][c] === WHITE_PAWN) {
    drawCircle(sideGap + (s * c) + highlightWidth, topGap + (s * (r - 1)) + highlightWidth, s / 2, 'green', 1)
  }
})
drawBoard()

