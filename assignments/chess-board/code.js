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
//drawText(WHITE_KING, width / 2, height / 2, 'black', 64);

const board = Math.min(width, height)
const s = board / 8
const sideGap = (width - board) / 2
const topGap = (height - board) / 2

let i = 0
let j = 0
for (j = 1; j < 9; j++) {
  for (i = 0; i < 8; i++) {
    const color = (i % 2) === 0 ? 'beige' : 'black'
    drawFilledRect(sideGap + (s * i), topGap + (s * j), s, s, color)
  }
}