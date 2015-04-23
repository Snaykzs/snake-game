
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
  size = typeof size == 'undefined' ? 50 : size
  this.size = size;
}

Board.prototype.activateCell = function(r,c){
  $("div#r_" + r + "-" + "c_" + c ).addClass("active")
};

Board.prototype.disActivateCell = function(r,c){
  $("div#r_" + r + "-" + "c_" + c ).removeClass("active")
};

Board.prototype.activateApple = function(r,c){
  $("div#r_" + r + "-" + "c_" + c ).addClass("apple")
};

Board.prototype.test = function(){
  return "Hey Im here";
}

//
// isActivecell(); - determines whether cell should be active (contains part of snake)
// activateCell(); - changes attribute of cell to display active state (snake)
//  activateAllCells();
