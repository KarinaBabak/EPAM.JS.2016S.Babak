$(function(){
	
	generateBtn = $('#generate');
	resetBtn = $('#reset');
	setBtn = $('#set');
	container = $('.container');	
	
	generateBtn.on('click', clickGenerate);
	resetBtn.on('click', clickReset);
	setBtn.on('click', clickSetColor);
	
	function clickGenerate(){
		//if the container for filling with numbers is not empty the code won't do
		if (!generateBtn.hasClass('button-nonActive')) {
			for (var i = 0; i < 50; i++) {
				var number = random(1,100);
				container.append('<div class="number">'+ number +'</div>');
			}
			
			generateBtn.removeClass("button-active").addClass("button-nonActive");	// the container for filling is not empty and the button becomes not active
			resetBtn.removeClass("button-nonActive").addClass("button-active");	// the "reset" button becomes active and we can clear the field
			setBtn.removeClass("button-nonActive").addClass("button-active"); // the "set" button becomes active and we can set color 
		}		
	};
	
	function clickReset() {	
		if (resetBtn.hasClass("button-active")) {
			container.empty();
		
			generateBtn.removeClass("button-nonActive").addClass("button-active");
			resetBtn.removeClass("button-active").addClass("button-nonActive");			
			setBtn.removeClass("button-active").addClass("button-nonActive");	
		}		
	};
		
	
	function clickSetColor() {
		//check whether numbers are generated and not colored
		if (!setBtn.hasClass('button-nonActive') && generateBtn.hasClass('button-nonActive')) {
			
			var generatedNumbers = $('.number'); 
		
			generatedNumbers.each(function() {
				$this = $(this);
				var number = +($this.text());
				
				if (number > 25 && number <= 50) {
					$this.addClass("green-color");
				}
				if (number > 50 && number <= 75) {
					$this.addClass("orange-color");
				}
				else if (number > 75) {
					$this.addClass("red-color");
				}
			});	
		
			setBtn.removeClass("button-active").addClass("button-nonActive");
		}		
	};
	
});
	
function random(min, max) {
		return Math.floor((Math.random() * max) + min);
	}

	