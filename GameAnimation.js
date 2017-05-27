game.onclick = function () {
    document.getElementById('but').style.display = "none";
    var s = 0,
        k = 0,
        l = 0,
        m = 0;
    var timers = setTimeout(function func() {
        wrapCard.classList.add('animate');
        suitCard.classList.add('animate_suit');
        document.getElementById('suitCard').innerHTML = arrSuit[randNum];

        var gameP = document.getElementById('gameHandPetja');
        gameHandPetja.classList.add('animate_gameHandP');
        gameP.innerHTML = cardPetja[k++] + gameP.innerHTML;

        var gameV = document.getElementById('gameHandVasja');
        gameHandVasja.classList.add('animate_gameHandV');
        gameV.innerHTML = cardVasja[s++] + gameV.innerHTML;

        var pointP = document.getElementById('gamePointsPetja');
        pointP.innerHTML = numPetja[l++];

        var pointV = document.getElementById('gamePointsVasja');
        pointV.innerHTML = numVasja[m++];

        timers = setTimeout(func, 3000);
        if (k > 17 && l > 17) {
            clearTimeout(timers);
            document.getElementById('backC1').style.display = "none";
            document.getElementById('backC2').style.display = "none";
        }
    }, 500);
};

function GameAnimation(timers, gameP, gameV, pointP, pointV) {
    Card.apply(this, arguments);
    this.timers = timers;
    this.gameP = gameP;
    this.gameV = gameV;
    this.pointP = pointP;
    this.pointV = pointV;
}
GameAnimation.prototype = Object.create(Game.prototype);
GameAnimation.prototype.constructor = GameAnimation;
