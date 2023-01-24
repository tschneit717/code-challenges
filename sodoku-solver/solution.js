/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {
  let foundBox = {}
  for(let y = 0; y < board.length; y++) {
      let foundRow = {};
      let foundColumn = {};
      for(let x = 0; x < board[y].length; x++) {
          let boxX = Math.floor(x / 3)
          let boxY = Math.floor(y / 3)
          if (board[y][x] in foundColumn || board[x][y] in foundRow ) {
              return false;
          }
          if (board[y][x] !== '.' ) {
              foundColumn[board[y][x]] = 1;
          }
          if (board[x][y] !== '.') {
              foundRow[board[x][y]] = 1;
          }
          if (!(`${boxX}${boxY}` in foundBox)) {
              foundBox[`${boxX}${boxY}`] = {}
          } 
          if (board[y][x] !== '.' ) {
              if (board[y][x] in foundBox[`${boxX}${boxY}`]) {
                  return false
              } else {
                  foundBox[`${boxX}${boxY}`][board[y][x]] = 1
              }
          }
      }
  }
  return true
};