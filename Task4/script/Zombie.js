function Zombie() {
    this.name;
    this.health = 50;
    this.offset = 1;    
    this.position = 0;
    this.minOffset = 0.9;
    this.$image;
}

Zombie.prototype.create = function (line) {
    this.$image = $("<div class='zombie " + this.name + "'></div>");
    $lines.eq(line).append(this.$image);
	width = $('#field').width() - this.$image.width();     
};

Zombie.prototype.move = function() {
 
    this.position += this.offset;   

    if (this.position >= width ) {
        this.die(); 		
		return false;            
    }	
	
	this.$image.css('right', this.position + 'px');
	
	return true;	   
};

Zombie.prototype.slowMove = function () {   

	var normOffset = this.offset
	this.offset = this.minOffset;	
	var that = this;
	
    setTimeout(function(){ 
		that.offset = normOffset; 
	}, 10000); 	
		
};

Zombie.prototype.die = function() {
    (this.$image).remove();
    this.position = 0;
};

