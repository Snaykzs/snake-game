
function Apple(boardSize){
    this.row = Math.floor(Math.random() * boardSize); // move to apple constructor // this is dependent on board.size
    this.column = Math.floor(Math.random() * boardSize); // move to apple constructor // this is dependent on board.size
    this.coordinates = [this.row, this.column];
};



