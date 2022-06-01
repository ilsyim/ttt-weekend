/*-------------------------------- Constants --------------------------------*/
let board, turn, winner


/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelector(".board")
const messageEl = document.querySelector("#message")



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  // console.log("this init function is invoked")
  board = [null, null, null, null, null, null, null, null, null,]
  // console.log(board)
  messageEl.textContent = ""
  turn = 1
  winner = null
  render()
}
console.log(init)
function render(){
  // board.array.forEach(element => {
    
  // });
}