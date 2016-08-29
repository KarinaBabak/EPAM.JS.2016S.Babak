function Zombie() {
    this.name;
    this.offset = 1;
    this.line;
    this.position = 0;
    this.minOffset = 0.9;
    this.health = 50;
    this.currentHealth = this.health;
    this.$imgZombie;
    this.$health;
    this.$healthValue;
    this.$currentHealthProgress;
}

Zombie.prototype.create = function (line) {
    this.$imgZombie = $("<div class='zombie " + this.name + "'></div>");
	this.$health = $("<div class='health'><span>100%</span></div>");
    this.$healthValue = this.$health.find("span");
    this.$currentHealthProgress = $("<div class ='health-progress'></div>");
    this.$health.prepend(this.$currentHealthProgress);
    this.$imgZombie.append(this.$health);
    this.line = line;
    $lines.eq(line).append(this.$imgZombie); //add zombie on screen

};

Zombie.prototype.move = function() {
    var width = $('#field').width() - this.$imgZombie.width();
    this.position += this.offset;   

    if (this.position >= width ) {
        this.die(); 		
		return false;            
    }

	this.$imgZombie.css('right', this.position + 'px');
    var that = this;

    if (typeof planstArray != "undefined") {
        for (var item in planstArray) {
            var toPlant = planstArray[item].position - that.position;

            if ((planstArray[item].line == that.line) && toPlant <= 35 && toPlant >= -58) {
                that.crashHealth(0.2);
            }

            if (toPlant == -58){
                planstArray[item].die();
            }
        }
    }

	return true;	   
};

Zombie.prototype.slowMove = function () {   

	var normOffset = this.offset;
	this.offset = this.minOffset;	
	var that = this;
	
    setTimeout(function(){ 
		that.offset = normOffset; 		
	}, 10000); 	
		
};

Zombie.prototype.die = function() {

    (this.$imgZombie).remove();
    this.position = 0;
};

Zombie.prototype.crashHealth = function (value) {
    var subtractValue = Math.round(100*value/this.health);
    var currentPercent = Math.round(100*this.currentHealth/this.health);
    var changedHealth = currentPercent - subtractValue;
    this.$currentHealthProgress.width(changedHealth + "%");
    this.$healthValue.text(changedHealth + "%");
    this.currentHealth -= value;
	
    if(this.currentHealth <= 0) {
        this.die();
    }
}


