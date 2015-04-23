function Game()
{
	this.snake = new Snake();
	this.lose = false;
	this.apple = new Apple();
	this.apple.generateApple();
	console.log(this.apple);
}

Game.prototype.Turn = function () {
	this.snake.GetKeyStroke();
	this.snake.Move(this.apple);
	this.CheckLose();
}

Game.prototype.CheckLose = function () 
{
	var snakeHeadRow = this.snake.snakeArray[this.snake.snakeArray.length-1][0];
	var snakeHeadCol = this.snake.snakeArray[this.snake.snakeArray.length-1][1];
	if (snakeHeadRow < 0 || snakeHeadRow > 50 || snakeHeadCol < 0 || snakeHeadCol > 50)
	{
		this.lose = true;
		console.log("you lose!");
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
	this.snakeArray = [[0,1], [0,2], [0,3]];
	this.direction = 2;
	this.score = 0;
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
				console.log("moving up");
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
				console.log("moving down");
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
				console.log("moving right");
				if (this.EatApple(apple))
				{
					console.log("eaten apple");
					var newHeadRow = headRow + 0;
					var newHeadCol = headCol + 1;
					console.log(headRow + "," + headCol);
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
				console.log("moving left");
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
		this.score += 10;
		console.log("your score is now " + this.score);
		return true;
	}
	return false;
}

	// driver code
var game = new Game();
game.Start();
