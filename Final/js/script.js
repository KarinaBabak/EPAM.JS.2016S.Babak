$(function() {

    game.settings(3000, 60);
    game.start();

    game = {
        settings: function (_timeOut, _timeOutStep) {
            timeOut = _timeOut || 3000;
            timeOutStep = _timeOutStep || 30;

            food = [];
            food[0] = 'images/food/burger.png';
            food[1] = "images/food/meat.png";
            food[2] = "images/food/pizza.png";
            food[3] = "images/food/cake.png";
            food[4] = "images/food/pizza2.png";

            user_food = {
                "meatCat": [food[1]],
                "burgerCat": [food[0]],
                "pizzaCat": [food[2], food[4]],
                "cakeCat": [food[3]]
            };
        },
        start: function (timer) {
            time = timer || timeOut;
            speed = setTimeout(game.randomFood, time);

        },
        stop: function () {
            clearTimeout(speed);
        },
        randomFood: function () {
            //if()
            var numberImg = random(0, 5);
            currentImage = $('#image-food').html('<img src="' + food[numberImg] + ' ">').find("img").stop().fadeIn(200);
            timeOut -= timeOutStep;
            game.stop();
            game.start(timeOut);
        },
        checkLife: function () {
            var countLife = $('.health > img').length;
            if(countLife == 0) {
                game.stop();
                $('#image-food').html('<h1>Game over</h1>');
                return false;
            }
            return true;
        },
        lostLife: function () {
            $('.health img:last').remove();
            //sad music
        }            

    };



    $('.main img').click(clickCat);


});

function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function clickCat() {
    var clickedCat = this.attr("alt");
    for (var img in user_food[clickedCat]) {
        if (img == currentImage) {

        }
        else {
            game.lostLife();
            //sad music
        }

    }
}

