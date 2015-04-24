	// driver code
$(document).ready(function ()
{
var game = new Game();
game.Start();
});

function Game ()
{
	this.sound = new Sound();
	this.snake = new Snake();
	this.lose = false;
	this.board = new Board(50);
	this.board.generateBoard();
	this.apple = new Apple(this.board.size);
	this.generateApple();
}

Game.prototype.Turn = function ()
{
	var lastRowCoord = this.snake.snakeArray[0][0];
	var lastColCoord = this.snake.snakeArray[0][1];
	this.board.renderSnakeCoords(this.snake.snakeArray);
	this.GetKeyStroke();
	this.snake.Move(this.apple);
	if (this.snake.eatenApple === true)
	{
		this.board.disActivateApple(this.apple.coordinates[0],this.apple.coordinates[1]);
		this.generateApple();
		this.snake.eatenApple = false;
	}
	this.board.disActivateCell(lastRowCoord, lastColCoord);
	this.CheckLose();
	this.LoseBySelfTouch();
}

Game.prototype.GetKeyStroke = function ()
{
	var thisSnake = this.snake;
		$(document).keydown(function (e)
		{
			switch(e.which)
			{
				case 38:
				thisSnake.direction = 1;
				break;
				case 39:
				thisSnake.direction = 2;
				break;
				case 40:
				thisSnake.direction = 3;
				break;
				case 37:
				thisSnake.direction = 4;
				break;
			}

		});
}

Game.prototype.generateApple = function()
{
	var thisBoard = this.board;
    this.apple = new Apple(this.board.size);
    if (thisBoard.isSnake(this.apple.row, this.apple.column))
		{
		    this.generateApple(); // this is cool
		};
    this.board.activateApple(this.apple.row, this.apple.column);
};

Game.prototype.CheckLose = function ()
{
	var snakeHeadRow = this.snake.snakeArray[this.snake.snakeArray.length-1][0];
	var snakeHeadCol = this.snake.snakeArray[this.snake.snakeArray.length-1][1];
	if (snakeHeadRow < 0 || snakeHeadRow > this.board.size - 1 || snakeHeadCol < 0 || snakeHeadCol > this.board.size -1)
	{
		this.lose = true;
		alert("you lose!");
		this.sound.stopAudio();
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
			this.sound.stopAudio();
			thisGame.requestStart();
		}
	}

}

Game.prototype.requestStart = function()
{
	var thisGame = this;
	thisGame.Start();
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
