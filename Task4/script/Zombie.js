function Zombie() {
    this.name;
    this.health = 50;
    this.offset = 1;
    this.speed = 10;
    this.position = 0;
    this.$image;
}

Zombie.prototype.create = function (line) {
    this.$image = $("<div class='zombie " + this.name + "'></div>");
    $lines.eq(line).append(this.$image);
};

Zombie.prototype.move = function(speedMoving) {
    var that = this;
    var _speed = speedMoving || that.speed;
    var width = $('#field').width() - that.$image.width();
    var $gameOver = $('.game-over');

    $gameOver.hide();

    var moving = setInterval(function () {
        that.position += that.offset;
        that.$image.css('right', that.position + 'px');

        if (that.position >= width) {
            that.die();
            $gameOver.show();
            $lines.empty();
            clearInterval(moving);
        }

    }, speedMoving);
};

Zombie.prototype.die = function() {
    $(this.$image).remove();
    this.position = 0;
};

