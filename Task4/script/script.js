$(function () {
	game.settings();

	$generateBtn = $('#btnGenerate');
	$generateBtn.click(game.generate);
	
	$('#btnSlowUp').click(game.slowMove);
	
	$('#btnGrowOld').click(game.growOld);

	$('#btnExplode').click(game.explodeZombies);
});

game = {	
	settings: function() {
		$lines = $("#field > .field-line");	
		$gameOver = $('.game-over');	
		timeStep = 100;
		zombiesArray = [];
	},
	
	generate: function() {
		var lineZombie = random(0, $lines.length);
		var zombieType = random(1, 2);
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
				
		var moving = setInterval(function() {
			if (!zombie.move()) {
				clearInterval(moving);	
				$lines.empty();   
				game.gameOver();							
			}			
		},100);
	},
	
	slowMove: function() {		
		for(var element in zombiesArray) {			
			zombiesArray[element].slowMove();
		}
	},

	growOld: function () {
		var i=10;
		var intervalCrashHealth = setInterval(function(){
			for(var element in zombiesArray) {
				zombiesArray[element].crashHealth(1);
			}
			i--;

			if (i == 0) {
				clearInterval(intervalCrashHealth);
			}

		}, 1000);
	},

	explodeZombies: function() {
		for(var element in zombiesArray) {
			zombiesArray[element].crashHealth(15);
		}
	},

	gameOver: function() {
		$gameOver.show();
		$generateBtn.attr('disabled',true);
		$generateBtn.css({"cursor" : "default"});

	}
	
};

function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}


