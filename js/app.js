/*-------------------------------- Constants --------------------------------*/
let board, turn, winner


/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".box")
const messageEl = document.querySelector("#message")

console.log(squareEls)
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
  let currentBoard = board.forEach(function(square){
    document.querySelector(".box")
    return 1
    console.log(currentBoard)
  })
}