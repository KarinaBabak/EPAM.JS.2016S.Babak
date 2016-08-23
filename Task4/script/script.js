$(function () {
	game.settings();
    $('#btnGenerate').click(game.generate);		
	
	$('#btnSlowUp').click(function() {
		game.slowMove();
	});

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

	gameOver: function() {
		$gameOver.show();
		$('#btnGenerate').attr('disabled',true);
	}
	
};

function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}


