
function Apple(){
    Board.call(this);
    this.coordinates = []
};

Apple.prototype = Object.create(Board.prototype);

Apple.prototype.generateApple = function(){

    var apple = new Apple();
    appleRow = Math.floor(Math.random() * apple.size);
    appleColumn = Math.floor(Math.random() * apple.size);

    if (apple.isSnake(appleRow, appleColumn)){
        this.generateApple();
    };

    this.coordinates = [appleRow, appleColumn]
    apple.activateApple(appleRow, appleColumn);
};

$(document).ready(function(){
    var apple = new Apple();
    apple.generateApple();
})
