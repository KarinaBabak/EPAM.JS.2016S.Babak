$(function () {
    $('#btnGenerate').click(function() {
		$lines = $("#field > .field-line");
		var lineZombie = random(0, $lines.length);
		var zombieType = random(1, 2);

		if (zombieType == 1) {
			zombie = new MichaelZombie();
		}
		else {
			zombie = new StrongZombie();
		}

		zombie.create(lineZombie);
		zombie.move();
		});

	$('#btnSlowUp').click(function() {
		//zombie.slowMove();
	});

});

function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}


