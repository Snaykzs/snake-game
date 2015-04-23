function Game()
{
	this.snake = new Snake();
	this.lose = false;
	this.apple = new Apple();
	this.board = new Board(50);
	this.board.generateBoard();
	this.apple.generateApple();
}

Game.prototype.Turn = function () {
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
		console.log("you lose!");
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

Game.prototype.Start = function () {
	var thisGame = this;
	var startGame = setInterval(function (){
		thisGame.Turn();
		if (thisGame.lose === true)
		{
			clearInterval(startGame);
		}
	}, 50);
}


function Snake () 
{
	this.snakeArray = [[0,0], [0,1], [0,2]];
	this.direction = 2;
	this.score = 0;
	this.eatenApple = false;
}

Snake.prototype.GetKeyStroke = function () 
{
	var thisSnake = this;
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
	// move
Snake.prototype.Move = function (apple) 
{
	var headRow = this.snakeArray[this.snakeArray.length-1][0];
	var headCol = this.snakeArray[this.snakeArray.length-1][1];
		switch (this.direction)
		{	
			// up
			case 1:
				if (this.EatApple(apple))
				{
					var newHeadRow = headRow -1;
					var newHeadCol = headCol + 0;
					var newHead = [newHeadRow, newHeadCol];
					this.snakeArray.push(newHead);
				}
				this.snakeArray.shift();
				var newHeadRow = headRow -1;
				var newHeadCol = headCol + 0;
				var newHead = [newHeadRow, newHeadCol];
				this.snakeArray.push(newHead);
			break;
			// down
			case 3:
				if (this.EatApple(apple))
				{
					var newHeadRow = headRow + 1;
					var newHeadCol = headCol + 0;
					var newHead = [newHeadRow, newHeadCol];
					this.snakeArray.push(newHead);
				}
				this.snakeArray.shift();
				var newHeadRow = headRow + 1;
				var newHeadCol = headCol + 0;
				var newHead = [newHeadRow, newHeadCol];
				this.snakeArray.push(newHead);
			break;
			// right
			case 2:
				if (this.EatApple(apple))
				{
					var newHeadRow = headRow + 0;
					var newHeadCol = headCol + 1;
					var newHead = [newHeadRow, newHeadCol];
					this.snakeArray.push(newHead);
				}
				this.snakeArray.shift();
				var newHeadRow = headRow + 0;
				var newHeadCol = headCol + 1;
				var newHead = [newHeadRow, newHeadCol];
				this.snakeArray.push(newHead);
			break;
			// left
			case 4:
				if (this.EatApple(apple))
				{
					var newHeadRow = headRow + 0;
					var newHeadCol = headCol -1;
					var newHead = [newHeadRow, newHeadCol];
					this.snakeArray.push(newHead);
				}
				this.snakeArray.shift();
				var newHeadRow = headRow + 0;
				var newHeadCol = headCol -1;
				var newHead = [newHeadRow, newHeadCol];
				this.snakeArray.push(newHead);
			break;
		}
}

Snake.prototype.EatApple = function (apple)
{
	var appleRow = apple.coordinates[0];
	var appleCol = apple.coordinates[1];

	var headRow = this.snakeArray[this.snakeArray.length-1][0];
	var headCol = this.snakeArray[this.snakeArray.length-1][1];

	if (appleRow === headRow && appleCol === headCol)
	{
		console.log("eaten apple");
		this.score += 10;
		console.log("your score is now " + this.score);
		this.eatenApple = true;
		return true;

	}
	return false;
}


	// driver code
$(document).ready(function() {

var game = new Game();
game.Start();

});	



