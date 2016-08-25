function StrongZombie() {
    Zombie.apply(this, arguments);
    this.name = "strong";    
    this.minOffset = 0.2;
};

StrongZombie.prototype = Object.create(Zombie.prototype);
StrongZombie.prototype.constructor = StrongZombie;