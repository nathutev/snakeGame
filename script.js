let board;
let rows = 20;
let columns = 20;
let squareSize = 25;
let context;

let snakeBody = [];

let snakeRows = squareSize * 10;
let snakeColumns = squareSize * 10;

let velocityRows = 0;
let velocityColumns = 0;

let mangoRows = squareSize * 10;
let mangoColumns = squareSize * 10;

let gameEnd = false;

let score = 0;
let reset;

window.onload = function() {
  board = document.getElementById("board");
  board.height = rows * squareSize;
  board.width = columns * squareSize;
  context = board.getContext("2d");

  placeMango();
  
  document.addEventListener("keyup", movement);
  
  setInterval(update, 10000/100);
}

function update() {
  if(gameEnd){
    return;
  }

  context.fillStyle = "#F7ECDE";
  context.fillRect(0, 0, board.width, board.height);
  
  context.fillStyle = "#FEC260";
  context.fillRect(mangoRows, mangoColumns, squareSize, squareSize);

  if(snakeRows == mangoRows && snakeColumns == mangoColumns){
    snakeBody.push([mangoRows, mangoColumns]);
    
    userScore();
    placeMango();
  }

  for(let i = snakeBody.length - 1; i > 0;  i--){
    snakeBody[i] = snakeBody[i - 1];
  }

  if (snakeBody.length){
    snakeBody[0] = [snakeRows, snakeColumns];
  }
  
  context.fillStyle = "#F65A83";
  snakeRows += velocityRows * squareSize;
  snakeColumns += velocityColumns * squareSize;
  context.fillRect(snakeRows, snakeColumns, squareSize, squareSize);

  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], squareSize, squareSize);
  }

  if(snakeRows < 0 || snakeColumns < 0 || snakeRows > columns * squareSize || snakeColumns > rows * squareSize){
    gameEnd = true;
    
    if(score == 1){
      alert("Game over. You ate " + score + " mango 🥭🐍");
    }
    else{
      alert("Game over. You ate " + score + " mangos 🥭🐍");
    }
   }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeRows == snakeBody[i][0] && snakeColumns == snakeBody[i][1]){
      gameEnd = true;
      
      if(score == 1){
        alert("Game over. You ate " + score + " mango 🥭🐍");
      }
      else{
        alert("Game over. You ate " + score + " mangos 🥭🐍");
      }
    }
  }
}

function movement(e) {
  if(e.code == "ArrowUp" && velocityColumns != 1){
    velocityRows = 0;
    velocityColumns = -1;
  }
  
  else if(e.code == "ArrowRight" && velocityRows != -1){
    velocityRows = 1;
    velocityColumns = 0;
  }

  else if(e.code == "ArrowDown" && velocityColumns != -1){
    velocityRows = 0;
    velocityColumns = 1;
  }

  else if(e.code == "ArrowLeft" && velocityRows != 1){
    velocityRows = -1;
    velocityColumns = 0;
  }
}

function placeMango(){
  mangoRows = Math.floor(Math.random() * columns) * squareSize;
  mangoColumns = Math.floor(Math.random() * rows) * squareSize;
}

function userScore(){
 score += 1;
 document.getElementById("userScore").innerHTML = score;
}

console.log("test file link");