// Apple has

// size
// random location
// display
// require ''

function Apple(){
  Board.call(this);
};
Apple.prototype = Object.create(Board.prototype);

/*Apple.prototype.generateApple = function(){

};*/

Apple.prototype.generateApple = function(){
  var apple = new Apple();
  appleRow = Math.floor(Math.random() * apple.size);
  appleColumn = Math.floor(Math.random() * apple.size);
  // appleRow = 2;
  // appleColumn = 3
  // console.log(apple);
  console.log(appleRow);
  console.log(appleColumn);
  apple.activateApple(appleRow, appleColumn);
};

// method to generate apple on board
// method to say apple has been eaten (by snake) (call generate method)
//

// Apple.prototype.getAppleIcon = function(){

// };

$(document).ready(function(){
  var apple = new Apple();
  console.log(apple.test());
  apple.generateApple();
})
