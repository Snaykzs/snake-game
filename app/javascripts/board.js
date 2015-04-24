
// $(document).ready(function() {
//   board = new Board(50);
//   board.generateBoard();
// });

Board.prototype.generateBoard = function() {
  for(var i = 0; i < this.size; i++) {
    for(var j = 0; j < this.size; j++) {
      $('.main-board').append("<div class='cell' id='r_"+i+"-c_"+j+"'></div>")
    }
  }
}

function Board(size) {
  size = typeof size == 'undefined' ? 50 : size
  this.size = size;
}

Board.prototype.displayScore = function (score) {
  $('.score').text("Your score: " + score);
}

Board.prototype.activateCell = function(r,c){
  $("div#r_" + r + "-" + "c_" + c ).addClass("active");
};

Board.prototype.disActivateCell = function(r,c){
  $("div#r_" + r + "-" + "c_" + c ).removeClass("active");
};

Board.prototype.activateApple = function(r,c){
  $("div#r_" + r + "-" + "c_" + c ).addClass("apple");
};

Board.prototype.disActivateApple = function(r,c){
    $("div#r_" + r + "-" + "c_" + c ).removeClass("apple");
    $("div#r_" + r + "-" + "c_" + c ).removeClass("head");
};

Board.prototype.isSnake = function(r, c){
  return $("div#r_" + r + "-" + "c_" + c ).hasClass('active');
};

Board.prototype.renderSnakeCoords = function (snakeArray) {
  for (var i = 0; i < snakeArray.length-1; i++)
  {
    var rowCell = snakeArray[i][0];
    var colCell = snakeArray[i][1];
    this.activateCell(rowCell, colCell);
  }
};

Board.prototype.renderSnakeHead = function (snakeArray)
{
  var headRow = snakeArray[snakeArray.length-1][0];
  var headCol = snakeArray[snakeArray.length-1][1];
  this.activateHeadCell(headRow,headCol);
}

Board.prototype.activateHeadCell = function(r,c){
  $("div#r_" + r + "-" + "c_" + c ).addClass("head");
};

Board.prototype.disActivateHeadCell = function (r,c){
  $("div#r_" + r + "-" + "c_" + c ).removeClass("head");
}

//
// isActivecell(); - determines whether cell should be active (contains part of snake)
// activateCell(); - changes attribute of cell to display active state (snake)
//  activateAllCells();
