function createBoard() {
  return [
    [1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 4],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
    [2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 3],
  ];
}

function drawBoard(board) {
  for (let y = 1; y < board.length -1; y++) {
    const row = board[y];
    let line = "";
    for (let x = 1; x < row.length -1; x++) {
      const block = row[x];
      switch (block) {
        case 9:
          line += "⬛️";
          break;
        // 0 = tom
        case 0:
          line += "⬜️";
          break;
        // 1 = blå
        case 1:
          line += "🟦";
          break;
        // 2 = grön
        case 2:
          line += "🟩";
          break;
        // 3 = lila
        case 3:
          line += "🟪";
          break;
        // 4 = gul
        case 4:
          line += "🟨";
          break;
      }
    }
    console.log(line);
	line = "";
  }
}

function drawTestBoard(board) {
  for (let y = 0; y < board.length; y++) {
	const row = board[y];
	let line = "";
	for (let x = 0; x < row.length; x++) {
	  line += row[x];
	}
	console.log(line);
  }
}

function shuffleArray(list) {
	return list
	.map(value => ({ value, sort: Math.random() }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ value }) => value)
}

function createPlayers() {
	return [
		{
		"name": "Blå spelare",
		"color": 1,
		"passed": false,
		"shapes": sortShapes(shuffleArray(createShapes(1)))
		},
		{
		"name": "Grön spelare",
		"color": 2,
		"passed": false,
		"shapes": sortShapes(shuffleArray(createShapes(2)))
		},
		{
		"name": "Lila spelare",
		"color": 3,
		"passed": false,
		"shapes": sortShapes(shuffleArray(createShapes(3)))
		},
		{
		"name": "Gul spelare",
		"color": 4,
		"passed": false,
		"shapes": sortShapes(shuffleArray(createShapes(4)))
		},
	]
}

function sortShapes(shapes) {
	return shapes
	.map(shape => ({ shape, sort: -calculateWorthOfShape(shape) }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ shape }) => shape)
}

function createShapes(c) {
	return [
			[
				[c, 0, 0],
				[c, c, 0],
				[0, c, c]
			],
			[
				[0, c, 0],
				[c, c, c],
				[0, 0, c]
			],
			[
				[c, 0, 0],
				[c, 0, 0],
				[c, c, c]
			],
			[
				[c, c, c, 0],
				[0, 0, c, c],
			],
			[
				[c, c, c, c],
				[0, 0, 0, c],
			],
			[
				[c, c, c],
				[c, 0, c],
			],
			[
				[c, c, c, c],
				[0, 0, c, 0],
			],
			[
				[c, c, c, c],
				[0, 0, c, 0],
			],
			[
				[c, c, c],
				[c, c, 0],
			],
			[
				[0, c, 0],
				[c, c, c],
				[0, c, 0],
			],
			[
				[0, c, 0],
				[c, c, c],
				[0, c, 0],
			],
			[
				[c, c, c],
				[0, c, 0],
				[0, c, 0]
			],
			[[c, c, c, c, c]],
			[
				[0, 0, c],
				[c, c, c],
				[c, 0, 0]
			],
			[
				[c, c],
				[c, c],
			],
			[
				[c, c, 0],
				[0, c, c],
			],
			[
				[0, c, 0],
				[c, c, c],
			],
			[
				[c, c, c],
				[c, 0, 0],
			],
			[[c, c, c, c]],
			[
				[c, c],
				[0, c],
			],
			[[c, c, c]],
			[[c, c]],
			[[c]]
		];
}

function mirrorShape(shape) {
	var newShape = [];
	var rowLength = shape[0].length
	var columnLength = shape.length
	
	// Set Y length
	newShape.length = rowLength;
	for (var sx = 0; sx < shape[0].length; sx++)
	{
		newShape[sx] = [];
		newShape[sx].length = columnLength;
		for (var sy = 0; sy < shape.length; sy++)
		{
			newShape[sx][sy] = shape[sy][sx];
		}
	}
	return newShape;
}

function rotateShape(shape, rotations = 1) {
	let newShape = shape;
		
	while (rotations > 0) {
		newShape = mirrorShape(newShape);
		rotations -=1;
		for (var nsy = 0; nsy < newShape.length; nsy++) {
			const oldRow = [...newShape[nsy]];
			for (var nsx = 0; nsx < newShape[nsy].length; nsx++)
			{
				newShape[nsy][nsx] = oldRow[oldRow.length-1-nsx];
			}
		}
	}
	return newShape;
}

function placeShape(board, player) {
	
	// Passa om alla bitar är ute
	if (player.shapes.length == 0) {
		player.passed = true;
		return;
	}
	
	// Försök placera alla bitar i ordning
	const color = player.color;
	for (let shapeIndex = 0; shapeIndex < player.shapes.length; shapeIndex++) {
		// Kolla alla kombinationer av samma bit
		let allPossibleShapeRotations = shuffleArray([
			player.shapes[shapeIndex],
			rotateShape(player.shapes[shapeIndex], 1),
			rotateShape(player.shapes[shapeIndex], 2),
			rotateShape(player.shapes[shapeIndex], 3),
			mirrorShape(player.shapes[shapeIndex]),
			rotateShape(mirrorShape(player.shapes[shapeIndex]), 1),
			rotateShape(mirrorShape(player.shapes[shapeIndex]), 2),
			rotateShape(mirrorShape(player.shapes[shapeIndex]), 3),
		]);
		for (let selectedRotation = 0; selectedRotation < allPossibleShapeRotations.length; selectedRotation++) {
			let selectedShape = allPossibleShapeRotations[selectedRotation];
			
			// Hitta första lediga rutan
			for (let by = 1; by < board.length-1; by++) {
				for (let bx = 1; bx < board[by].length-1; bx++) {
					if (board[by][bx] == 0) {
						
						// Försök placera biten
						let foundCorner = false;
						let foundEmptiness = true;
						
						// Kolla att biten kan placeras
						for (let sy = 0; sy < selectedShape.length; sy++) {
							for (let sx = 0; sx < selectedShape[sy].length; sx++) {
								const py = by + sy;
								const px = bx + sx;
								
								if (selectedShape[sy][sx] == color) {
									// Har plats
									if (foundEmptiness) {
										foundEmptiness = (
											(
												py <= board.length-2 &&
												px <= board[py].length-2 &&
												py >= 1 &&
												px >= 1
											) && (
											(board[py][px] == 0) &&
											(board[py-1][px] != color) &&
											(board[py+1][px] != color) &&
											(board[py][px-1] != color) &&
											(board[py][px+1] != color)
										)
									);
							
									// Behöver ett hörn
									if (foundEmptiness && !foundCorner && (
											board[py-1][px-1] == color ||
											board[py+1][px-1] == color ||
											board[py-1][px+1] == color ||
											board[py+1][px+1] == color
									)) {
										foundCorner = true;
									}
									}
								}
							}
						}
						
						// Kan placeras, ta bort bit och avsluta drag
						if (foundCorner && foundEmptiness) {
							for (let sy = 0; sy < selectedShape.length; sy++) {
								for (let sx = 0; sx < selectedShape[sy].length; sx++) {
									if (selectedShape[sy][sx] != 0) {
										board[by+sy][bx+sx] = selectedShape[sy][sx];
									}
								}
							}
							
							player.shapes.splice(shapeIndex, 1);
							return;
						}
					}
				}
			}
		}
	}
	// Ge upp!
	player.passed = true;
	return;
}

function calculateWorthOfShape(shape) {
	let value = 0;
	for (var sy = 0; sy < shape.length; sy++) {
		for (var sx = 0; sx < shape[sy].length; sx++)
		{
			value += (shape[sy][sx] != 0 ? 1 : 0);
		}
	}
	return value;
}

function calculateWorthOfPlayer(player) {
	let value = 0;
	for (var i = 0; i < player.shapes.length; i++) {
		value += calculateWorthOfShape(player.shapes[i]);
	}
	return value;
}

async function start() {
  const board = createBoard();
  const players = createPlayers();
  while (true) {
  	for (let i = 0; i < players.length; i++) {
	  	const currentPlayer = players[i];
	  	if (!currentPlayer.passed) {  
	  		console.log(currentPlayer.name + ":", calculateWorthOfPlayer(currentPlayer), "bitar kvar");
			placeShape(board, currentPlayer);
	  	}
	  else {
  		console.log(currentPlayer.name + ":", calculateWorthOfPlayer(currentPlayer), "bitar kvar (passat)");
	  }
  	}
	drawBoard(board);
	if (players.reduce((v, player) => v && player.passed, true)) {
    	console.log("Spelet är slut!")
		break;
	}
	await new Promise(resolve => setTimeout(resolve, 200));
	console.clear();
  }
}

start();
