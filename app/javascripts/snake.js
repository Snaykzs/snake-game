function Snake () 
{
	this.snakeArray = [[0,0], [0,1], [0,2]];
	this.direction = 2;
	this.score = 0;
	this.eatenApple = false;
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
