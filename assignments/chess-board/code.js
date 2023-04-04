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

let x = (width, height) => { Math.min (width, height) }
console.log(x)

drawFilledRect(Math.min (width, height) / 8, 0, Math.min(width, height)/4 , Math.min (width, height) / 8, 'black')
