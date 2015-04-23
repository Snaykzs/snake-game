	// driver code
$(document).ready(function () 
{
var game = new Game();
game.Start();
});	

function Game ()
{
	this.snake = new Snake();
	this.lose = false;
	this.apple = new Apple();
	this.board = new Board(50);
	this.board.generateBoard();
	this.apple.generateApple();
}

Game.prototype.Turn = function () 
{
	var lastRowCoord = this.snake.snakeArray[0][0];
	var lastColCoord = this.snake.snakeArray[0][1];
	this.board.renderSnakeCoords(this.snake.snakeArray);
	this.snake.GetKeyStroke();
	this.snake.Move(this.apple);
	if (this.snake.eatenApple)
	{
		this.board.disActivateApple(this.apple.coordinates[0],this.apple.coordinates[1]);
		this.apple.generateApple();
		this.snake.eatenApple = false;
	}
	this.board.disActivateCell(lastRowCoord, lastColCoord);
	this.CheckLose();
	this.LoseBySelfTouch();
}

Game.prototype.CheckLose = function () 
{
	var snakeHeadRow = this.snake.snakeArray[this.snake.snakeArray.length-1][0];
	var snakeHeadCol = this.snake.snakeArray[this.snake.snakeArray.length-1][1];
	if (snakeHeadRow < 0 || snakeHeadRow > 49 || snakeHeadCol < 0 || snakeHeadCol > 49)
	{
		this.lose = true;
		alert("you lose!");
	}
}

Game.prototype.LoseBySelfTouch = function ()
{
	var snakeHeadRow = this.snake.snakeArray[this.snake.snakeArray.length-1][0];
	var snakeHeadCol = this.snake.snakeArray[this.snake.snakeArray.length-1][1];
	for (var i = 0; i < this.snake.snakeArray.length - 2; i++)
	{
		var row = this.snake.snakeArray[i][0];
		var col = this.snake.snakeArray[i][1];
		if (snakeHeadRow === row && snakeHeadCol === col)
		{
			this.lose = true;
			alert("you lose!");
		}
	}

}

Game.prototype.Start = function () 
{
	var thisGame = this;
	var startGame = setInterval(function ()
	{
		thisGame.Turn();
		if (thisGame.lose === true)
		{
			clearInterval(startGame);
		}
	}, 50);
}