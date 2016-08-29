$(function () {
	game.settings();

	$generateBtn = $('#btnGenerate');
	$autoGenerateBtn = $('#btnAutoGenerate');
	$growOldBtn = $('#btnGrowOld');
	$explodeBtn = $('#btnExplode');
	$slowUpBtn = $('#btnSlowUp');
	$pauseBtn = $('#btnPause');
	$barrierBtn = $('#btnBarrier');

	
	$generateBtn.click(function() {
		game.deactivateBtn($autoGenerateBtn);
		game.generate();
	});
	
	$autoGenerateBtn.click(game.autoGenerate);
	$pauseBtn.click(game.pauseGame);
	$slowUpBtn.click(function() {
		game.deactivateBtn($slowUpBtn);
		game.slowMove();

		var activateBtnInterval = setInterval(function(){
			game.activateBtn($slowUpBtn);
			clearInterval(activateBtnInterval);
		}, 10000);
	});

	$growOldBtn.click(game.growOld);
	$explodeBtn.click(game.explodeZombies);

	$barrierBtn.click(function() {
		game.deactivateBtn($barrierBtn);
		game.growPlant();
		game.growPlant();
		game.growPlant();

		var activateBtnInterval = setInterval(function(){
			game.activateBtn($barrierBtn);
			clearInterval(activateBtnInterval);
		}, 15000);
	});

	$pauseBtn.click(game.pause);
});

game = {	
	settings: function() {
		$lines = $("#field > .field-line");			
		$gameOver = $('.game-over');
		timeStep = 100;
		zombiesArray = [];
		planstArray = [];
		isPlay = true;

		game.deactivateBtn($growOldBtn);
		game.deactivateBtn($explodeBtn);
		game.deactivateBtn($slowUpBtn);
		game.deactivateBtn($pauseBtn);
		game.deactivateBtn($barrierBtn);
	},
	
	generate: function() {		
		var lineZombie = random(0, $lines.length);
		var zombieType = random(1, 3);
		var zombie;

			if (zombieType == 1) {
				zombie = new MichaelZombie();
			}
			else {
				zombie = new StrongZombie();
			}

			$gameOver.hide();
			zombiesArray.push(zombie);
			zombie.create(lineZombie);

			var moving = setInterval(function () {
				if(isPlay) {
					if (!zombie.move()) {
						clearInterval(moving);
						$lines.empty();
						game.gameOver();
					}
				}
			}, 100);
	},
	
	autoGenerate: function() {
		game.deactivateBtn($generateBtn);

		var intervalGenerate = setInterval(function() {
			if (!$gameOver.is(":visible")) {
				game.generate();
			}
		}, 6000);

		game.generate();
	},
	
	slowMove: function() {
		for(var element in zombiesArray) {			
			zombiesArray[element].slowMove();
		}
	},	

	growOld: function () {
		game.deactivateBtn($growOldBtn);	
		var i=10;
		var intervalCrashHealth = setInterval(function(){
			for(var element in zombiesArray) {
				zombiesArray[element].crashHealth(1);
			}
			i--;

			if (i == 0) {
				clearInterval(intervalCrashHealth);
				game.activateBtn($growOldBtn);
			}

		}, 1000);
	},

	explodeZombies: function() {
		game.deactivateBtn($explodeBtn);
		for(var element in zombiesArray) {
			zombiesArray[element].crashHealth(15);
		}
		game.activateBtn($explodeBtn);
	},
	
	pauseGame: function() {
		if (isPlay == true) {
			isPlay = false;
			$pauseBtn.text("Play");
		}
		else {
			isPlay = true;
			$pauseBtn.text("Pause");
		}
	},
	
	growPlant: function() {
		var line = random(0, $lines.length);
		var position = random(200, 400);
		var plant = new Plant();
		planstArray.push(plant);
		plant.display(line, position);
	},

	gameOver: function() {
		$gameOver.show();
		var buttons = $(".button");
		game.deactivateBtn(buttons);
	},
	
	deactivateBtn: function(btnName) {
		btnName.attr('disabled',true);
		btnName.css({"cursor" : "default"});
	},
	
	activateBtn: function(btnName) {
		btnName.attr('disabled',false);
		btnName.css({"cursor" : "pointer"});
	}
	
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


