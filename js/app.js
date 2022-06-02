/*-------------------------------- Constants --------------------------------*/
let sqIndx
let winningCombos = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]

// console.log(winningCombos[idx#])
/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".box")
const messageEl = document.querySelector("#message")

// console.log(squareEls)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  // console.log("this init function is invoked")
  board = [null, null, null, null, null, null, null, null, null]
  // console.log(board)
  messageEl.textContent = ""
  turn = 1
  winner = null
  render()
}

// render is showing the current state of the board without user input. board.forEach is going to show each squareEl as null because that's what the board[] is set to.
function render(){
  let currentBoard
  // do this for each element in squareEls
  // if the element = 1, display X ; if the element = -1, display O ; if none of the sqaures have been clicked, display null.
  // document.getElementById("sq0").textContent = "X" <----- this line will put 'X' in the box with id=sq0
  board.forEach(function(squareEl, index){
    // console.log(squareEl)
    // console.log(index)
    if (board[index] === 1){
      squareEls[index].textContent = 'X'
    } else if (board[index] === -1){
      squareEls[index].textContent = 'O'
    } else if (board[index] === null){
      squareEls[index].textContent = null
    }
  })
  // console.log(currentBoard)
  if (winner === null) {
    renderPlayerTurn()
  } else if (winner = 'T') {
    messageEl.textContent = `You tied!`
  } else {
    renderWin()
  }
}

// squareEls.addEventListener('click', function(evt){
//   let sqIdx 
// })
// goal of step 6c is to get the index of the square when it's clicked - index of the square is an id with a number contained in a string (parseInt), don't need 'sq' so use .replace('searchFor', 'replaceWith') 
document.querySelector('.board').addEventListener('click', handleClick)
function handleClick(evt){
  const sqIdx = parseInt(evt.target.id.replace('sq', ''))
console.log(sqIdx)
// doc.qs('section') = if I click on each box it returns an event when console.log(evt)
}
// if the user clicks a box,  -> (board.value === 1) {
    //   document.getElementById().textContent = "X"
    // } else (board.value === -1) {
    //   document.getElementById().textContent = "O"
    // }



function renderPlayerTurn(){
  if (turn === 1) {
    messageEl.textContent = `Player 1, it's your turn!`
  } else if (turn === -1) {
    messageEl.textContent = `Player 2, it's your turn!`
  }
}

function renderWin(){
  if (winner === 1){
    messageEl.textContent = `Congratulations! Player 1 won!`
  } else if (winner === -1) {
    messageEl.textContent = `Congratulations! Player 2 won!`
  }
}

// if winner !== null, the game should end!!!!