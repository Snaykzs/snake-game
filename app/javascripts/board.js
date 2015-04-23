// Board has

// size
// display
// borders

$(document).ready(function() {
  board = new Board(50);
  board.generateBoard();

});



Board.prototype.generateBoard = function() {
  for(var i = 0; i < this.size; i++) {
    for(var j = 0; j < this.size; j++) {
      $('.main-board').append("<div class='cell' id='r_"+i+"-c_"+j+"'></div>")
    }
  }
}

function Board(size) {
  this.size = size;
}
