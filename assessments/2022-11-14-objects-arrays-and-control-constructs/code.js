// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => { return rect.width * rect.height };

const higherPaid = (e1, e2) => { return Math.max(e1.salary, e2.salary) };

const isSamePoint = (p1, p2) => {
  return ? p1.x === p2.x && p1.y === p2.x
};

const totalWithTip = (bill, tipPercentage) => {
  let newObject = { 'subtotal': bill.subtotal, 'tip': bill.subtotal * tipPercentage, 'total': bill.subtotal + bill.subtotal * tipPercentage }
};

const isWinner = (player) => {
  if (player.score > 100) {
    return true
  }
  return false
};

const updateWins = (players) => {
  if (players.score > 100) {
    let players = { 'score': players.score, 'wins': players.wins + 1 }
  }
  return undefined
};

const bigWinners = (players) => {
  let newArray = []
  for (i = 0; i < players.length; i++) {
    if (players[i].wins > 10) {
      newArray.push(players[i])
    }
  }
  return newArray
};

const fillTimesTable = (table) => {
  for (i = 1; i <= table.length; i++) {
    for (j = 1; j <= table.length; j++) {
      table[i][j] = i * j
    }
  }
  return undefined
};

const sums = (n) => {
  let newArray = []
  let sum = 0
  for (i = 0; i <= n + 1; i++) {
    let sum = sum + i
    newArray.push(sum)
  }
  return newArray
};

const rule110 = (cells) => {
  let newArray = []
  for (i = 0; i < cells.length; i++) {
    if (cells[i - 1] = cells[i] = cells[i + 1]) {
      newArray[i] = 0
    } else if ((cells[i - 1] = 1) && (cells[i] = cells[i + 1])) {
      newArray[i] = 0
    } else {
      newArray[i] = 1
    }
  }
};
