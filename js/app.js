/*-------------------------------- Constants --------------------------------*/
let board, turn, winner


/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".box")
const messageEl = document.querySelector("#message")

// console.log(squareEls)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  // console.log("this init function is invoked")
  board = [null, null, null, null, null, null, null, null, null,]
  // console.log(board)
  messageEl.textContent = "Player 1, click a square to begin!"
  turn = 1
  winner = null
  render()
}
function render(){
  let currentBoard
  squareEls.forEach(function(squareEl, index){
    // do this for each element in squareEls
    // if the element = 1, display X ; if the element = -1, display O ; if none of the sqaures have been clicked, display null.
    // document.getElementById("sq0").textContent = "X" <----- this line will put 'X' in the box with id=sq0
    squareEl = null
    console.log(squareEl)
    console.log(index)
  })
  console.log(currentBoard)
  winner = null
  if (winner === null) {
    renderPlayerTurn()
  } else if (winner = 'T') {
    renderTie()
  } else {
    renderWin()
  }
}

function renderPlayerTurn(){
  if (turn === 1) {
    messageEl.textContent = `Player 1, it's your turn!`
  } else if (turn === -1) {
    messageEl.textContent = `Player 2, it's your turn!`
  }
}

// function renderWin(){
//   messageEl.textContent = `Congratulations! ? ${Player1} : ${Player2} You won!`
// }