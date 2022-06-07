/*-------------------------------- Constants --------------------------------*/
const projects = [
  {
    name: "Tic-Tac-Toe",
    description: "My first major project at GA, a tic-tac-toe game."
  }
]
let sqIdx
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
// the squares that will hold X or O
const squareEls = document.querySelectorAll(".box")
// message displayed (whose turn, who won, etc.)
const messageEl = document.querySelector("#message")
// reset button appears when a click happens
const resetBtnEl = document.querySelector("#reset-button")

// console.log(squareEls)
/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.board').addEventListener('click', handleClick)
document.querySelector('#reset-button').addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  // console.log("this init function is invoked")
  board = [null, null, null, null, null, null, null, null, null]
  // console.log(board)
  messageEl.textContent = ""
  turn = 1
  winner = null
  resetBtnEl.setAttribute('hidden', true)
  render()
}

// render is showing the current state of the board without user input. board.forEach is going to show each squareEl as null because that's what the board[] is set to.

function render(){
  let currentBoard
  if (turn === -1) {
    resetBtnEl.removeAttribute('hidden')
  }
  // do this for each element in squareEls
  // if the element = 1, display X ; if the element = -1, display O ; if none of the sqaures have been clicked, display null.
  // document.getElementById("sq0").textContent = "X" <----- this line will put 'X' in the box with id=sq0
  
  board.forEach(function(squareEl, index){
    // console.log(squareEl)
    // console.log(index)
    if (squareEl === 1) {
      squareEls[index].textContent = 'X'
    } else if (squareEl === -1) {
      squareEls[index].textContent = 'O'
    } 
    else {
      squareEls[index].textContent = ''
    }
  })
  // console.log(currentBoard)
  if (winner === null) {
    renderPlayerTurn()
  } else if (winner === 'T') {
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
  if (board[sqIdx] !== null) return
  if (winner !== null) return
  board[sqIdx] = turn
  turn *= -1
  getWinner()
  render()
  // console.log()
// doc.qs('section') = if I click on each box it returns an event when console.log(evt)
}

// 
function getWinner(){
  // set winner = the board's value['']
  winner = board['']
  for (let index = 0; index < winningCombos.length; index++) {
    let sum =
      board[winningCombos[index][0]] + 
      board[winningCombos[index][1]] + 
      board[winningCombos[index][2]] 
      if (sum === 3) {
      winner = 1
    } else if (sum === - 3) {
      winner = -1
    } else if (board.includes(null) === false && winner === null) {
      winner = 'T'
    }
  }
  return null
}



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
export {
  projects
}

// if winner !== null, the game should end!!!