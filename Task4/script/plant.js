function Plant() {
    this.line;
    this.position;
    this.$imgPlant = $("<div class='plant'></div>");

    this.display = function (line, position) {
        this.line = line;
        this.position = position;
        this.$imgPlant.css({"position": "absolute"});
        this.$imgPlant.css('right', position + 'px');
        $lines.eq(this.line).append(this.$imgPlant); //add plant on screen
    }

    this.die = function () {
        this.$imgPlant.remove();
        this.position = 0;
    }

}

