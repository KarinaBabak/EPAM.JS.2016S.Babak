function StrongZombie() {
    Zombie.apply(this, arguments);
    this.name = "strong";
    this.health = 70;
    this.minSpeed = 3;
};

StrongZombie.prototype = Object.create(Zombie.prototype);
StrongZombie.prototype.constructor = StrongZombie;