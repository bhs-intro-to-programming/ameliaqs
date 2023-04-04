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
const square = board / 8
const sideGap = (width - board) / 2
const topGap = (height - board) / 2

let i = 0
for (i = 0; i < 4; i++) {
  drawFilledRect(sideGap + i * square, topGap, 2 * i * square, square, 'white')
}

