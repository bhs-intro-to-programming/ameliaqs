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
console.log(board)
console.log(square)

drawFilledRect(Math.min (width, height) / 8, 0, Math.min(width, height)/4 , Math.min (width, height) / 8, 'black')
