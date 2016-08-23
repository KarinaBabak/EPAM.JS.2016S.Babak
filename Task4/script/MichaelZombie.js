function MichaelZombie() {
	Zombie.apply(this, arguments);
	this.name = "michael";
	this.health = 70;
	this.minOffset = 0.6;
};

MichaelZombie.prototype = Object.create(Zombie.prototype);
MichaelZombie.prototype.constructor = MichaelZombie;