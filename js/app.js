/*-------------------------------- Constants --------------------------------*/
let board, turn, winner, sqIdx
let winningCombos = [
[1, null, null, null, 1, null, null, null, 1],
[null, null, 1, null, 1, null, 1, null, null],
[1, null, null, 1, null, null, 1, null, null],
[null, 1, null, null, 1, null, null, 1, null],
[null, null, 1, null, null, 1, null, null, 1],
[1, 1, 1, null, null, null, null, null, null],
[null, null, null, 1, 1, 1, null, null, null],
[null, null, null, null, null, null, 1, 1, 1]
]

// console.log(winningCombos[idx#])
/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".box")
const messageEl = document.querySelector("#message")

// console.log(squareEls)
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
// init()

// function init(){
//   // console.log("this init function is invoked")
//   board = [null, null, null, null, null, null, null, null, null]
//   // console.log(board)
//   messageEl.textContent = ""
//   turn = 1
//   winner = null
//   render()
// }

// // render is showing the current state of the board without user input. board.forEach is going to show each squareEl as null because that's what the board[] is set to.
// function render(){
//   let currentBoard
//   board.forEach(function(squareEl, index){
//     // do this for each element in squareEls
//     // if the element = 1, display X ; if the element = -1, display O ; if none of the sqaures have been clicked, display null.
//     // document.getElementById("sq0").textContent = "X" <----- this line will put 'X' in the box with id=sq0
//     console.log(squareEl)
//     console.log(index)
//   })
//   console.log(currentBoard)
//   winner = null
//   if (winner === null) {
//     renderPlayerTurn()
//   } else if (winner = 'T') {
//     messageEl.textContent = `You tied!`
//   } else {
//     renderWin()
//   }
// }

document.querySelector('section').addEventListener('click', handleClick)
function handleClick(evt){
console.log(evt)
// doc.qs('section') = if I click on each box it returns an event when console.log(evt)
}
// if the user clicks a box,  -> (board.value === 1) {
    //   document.getElementById().textContent = "X"
    // } else (board.value === -1) {
    //   document.getElementById().textContent = "O"
    // }



// function renderPlayerTurn(){
//   if (turn === 1) {
//     messageEl.textContent = `Player 1, it's your turn!`
//   } else if (turn === -1) {
//     messageEl.textContent = `Player 2, it's your turn!`
//   }
// }

// function renderWin(){
//   messageEl.textContent = `Congratulations! ? ${Player1} : ${Player2} You won!`
// }