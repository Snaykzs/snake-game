// Board has

// size
// display
// borders

$(document).ready(function() {
  generateBoard(20);

});

function generateBoard(size) {
  for(var i=0; i <size; i++) {
    for(var j=0; j<size; j++) {
      $('.main-board').append("<div class='cell'></div>")
    }
  }
}
