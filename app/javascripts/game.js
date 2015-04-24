	// driver code
$(document).ready(function ()
{
	$('.score').text('Press Spacebar to Start!');
	var game = new Game();
	game.openingSequence(game);
});

function Game ()
{
	this.sound = new Sound();
	this.loseSound = new LoseSound();
	this.snake = new Snake();
	this.lose = false;
	this.board = new Board(30);
	this.board.generateBoard();
	this.apple = new Apple(this.board.size);
	this.generateApple();
}

Game.prototype.openingSequence = function (game)
{
	var thisGame = game;
	$(document).keyup(function(e)
			{
				if (e.which === 32)
				{
					$('.score').text("Eugene's score: 0")
					thisGame.Start();
				}
			});
}

Game.prototype.Turn = function ()
{
	var lastRowCoord = this.snake.snakeArray[0][0];
	var lastColCoord = this.snake.snakeArray[0][1];
	var headRow = this.snake.snakeArray[this.snake.snakeArray.length-2][0];
  	var headCol = this.snake.snakeArray[this.snake.snakeArray.length-2][1];
	this.board.renderSnakeCoords(this.snake.snakeArray);
	this.board.renderSnakeHead(this.snake.snakeArray);
	this.GetKeyStroke();
	this.snake.Move(this.apple);
	if (this.snake.eatenApple === true)
	{
		this.board.disActivateApple(this.apple.coordinates[0],this.apple.coordinates[1]);
		this.board.disActivateHeadCell(headRow,headCol);
		this.generateApple();
		this.snake.eatenApple = false;
		this.board.displayScore(this.snake.score);
	}
	this.board.disActivateCell(lastRowCoord, lastColCoord);
	this.board.disActivateHeadCell(headRow,headCol);
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
	var thisGame = this;
	var snakeHeadRow = this.snake.snakeArray[this.snake.snakeArray.length-1][0];
	var snakeHeadCol = this.snake.snakeArray[this.snake.snakeArray.length-1][1];
	if (snakeHeadRow < 0 || snakeHeadRow > this.board.size - 1 || snakeHeadCol < 0 || snakeHeadCol > this.board.size -1)
	{
		this.lose = true;
		this.sound.stopAudio();
		this.loseSound.startAudio();
		this.requestStart();
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
			this.sound.stopAudio();
			this.loseSound.startAudio();
			this.requestStart();
		}
	}

}

Game.prototype.requestStart = function()
{
			$('.score').text('Eugene lost! Press Spacebar to restart!');
			$(document).keyup(function(e)
			{
				if (e.which === 32)
				{
				location.reload();
				}
			});
}

Game.prototype.Start = function ()
{
	var thisGame = this;
	thisGame.sound.startAudio();
	var startGame = setInterval(function ()
	{
		thisGame.Turn();
		if (thisGame.lose === true)
		{
			clearInterval(startGame);
		}
	}, 70);
}

