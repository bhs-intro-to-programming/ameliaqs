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

let c = 0
let r = 0
for (r = 0; r < 4; r++) {
  if ((r % 0 === 0)) {
    for (c = 0; c < 8; c++) {
      const color = (c % 2) === 0 ? 'beige' : 'black'
      drawFilledRect(sideGap + (s * c), topGap + (s * 2 * r), s, s, color)
    }
  } else {
      for (c = 0; c < 8; c++) {
        const color = (c % 2) === 0 ? 'black' : 'beige'
        drawFilledRect(sideGap + (s * c), topGap + (s * 2 * r) + s, s, s, color)
      }
    }
  }