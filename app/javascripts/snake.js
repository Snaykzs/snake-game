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
