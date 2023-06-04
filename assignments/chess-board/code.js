// piece is an object that says what type of piece it is
const piece = (kind, color, icon) => {
  return { kind, color, icon };
};

const WHITE_KING = piece('king', 'white', '♔');
const WHITE_QUEEN = piece('queen', 'white', '♕');
const WHITE_ROOK = piece('rook', 'white', '♖');
const WHITE_BISHOP = piece('bishop', 'white', '♗');
const WHITE_KNIGHT = piece('knight', 'white', '♘');
const WHITE_PAWN = piece('pawn', 'white', '♙');
const BLACK_KING = piece('king', 'black', '♚');
const BLACK_QUEEN = piece('queen', 'black', '♛');
const BLACK_ROOK = piece('rook', 'black', '♜');
const BLACK_BISHOP = piece('bishop', 'black', '♝');
const BLACK_KNIGHT = piece('knight', 'black', '♞');
const BLACK_PAWN = piece('pawn', 'black', '♟');




// Example of drawing one of the pieces
// drawText(WHITE_KING, width / 2, height / 2, 'black', 64);

// set dimensions
const board = Math.min(width, height)
const s = board / 8
const sideGap = (width - board) / 2
const topGap = (height - board) / 2

// draw board and pieces
const pieces = Array(8).fill().map(() => Array(8).fill())
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
      if (pieces[r][c] !== undefined) {
        drawText(pieces[r][c].icon, sideGap + (s * c), topGap + (s * (r + 1)), 'grey', 64)
      }
    }
  }
}

let selected = null;
let move = null

// check if moves are legal
const legalMove = (move, selected) => {
  let d = selected.piece.color === 'white' ? 1 : -1
  if (selected.piece.kind === 'pawn') {
    return pawnMove(move, selected, d)
  } else if (selected.piece.kind === 'rook') {
    return rookMove(move, selected)
  } else if (selected.piece.kind === 'knight') {
    return knightMove(move, selected)
  } else if (selected.piece.kind === 'bishop') {
    return bishopMove(move, selected)
  } else {
    console.log('nyi')
  }
}

const pawnMove = (move, selected, direction) => {
  if ((move.row + direction) === selected.row && move.col === selected.col) {
    console.log('trueq')
    return true
  } else {
    console.log('false')
    return false
  }
}

const rookMove = (move, selected) => {
  if (move.row === selected.row || move.col === selected.col) {
    return true
  } else {
    return false
  }
}

const knightMove = (move, selected) => {
  if (Math.abs(move.row - selected.row) + Math.abs(move.col - selected.col) === 3 && Math.abs(move.row - selected.row) * Math.abs(move.col - selected.col) !== 0) {
    return true
  } else {
    return false
  }
}

const bishopMove = (move, selected) => {
  if (Math.abs(move.row - selected.row) === Math.abs(move.col - selected.col)) {
    return true
  } else {
    return false
  }
}

registerOnclick((x, y) => {
  let c = Math.floor((x - sideGap) / s)
  let r = Math.floor((y - topGap) / s)
  if (selected === null) {
    selected = { row: r, col: c, piece: pieces[r][c] };
  } else {
    move = { row: r, col: c };
    console.log('s' + selected.row + '; m' + move.row)
    if (legalMove(move, selected)) {
      pieces[r][c] = pieces[selected.row][selected.col]
      pieces[selected.row][selected.col] = undefined
    }
    else {
      console.log('no')
    }


    selected = null
    drawBoard()
  }

  let highlightWidth = s / 2
  if (pieces[r][c] === WHITE_PAWN) {
    drawCircle(sideGap + (s * c) + highlightWidth, topGap + (s * (r - 1)) + highlightWidth, s / 2, 'green', 1)
  }
})
drawBoard()

