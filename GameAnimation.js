/*var gameP = document.getElementById('gameHandPetja');
for (var k = 0; k < 18;) {
    gameP.innerHTML = cardPetja[k++] + gameP.innerHTML;
}
var gameV = document.getElementById('gameHandVasja');
for (var s = 0; s < 18;) {
    gameV.innerHTML = cardVasja[s++] + gameV.innerHTML;
}*/

game.onclick = function () {
    document.getElementById('but').style.display = "none";
    var l = 0,
        m = 0,
        r = 0,
        k = 0,
        s = 0,
        t = 0;
    var timers = setTimeout(function func() {
        wrapCard.classList.add('animate');
        suitCard.classList.add('animate_suit');
        document.getElementById('suitCard').innerHTML = arrSuit[randNum];
        
        /*var elmP = gameP.childNodes[t++];
        elmP.className = "animate_gameHandP";
        
        var elmV = gameV.childNodes[r++];
        elmV.className = "animate_gameHandV";*/

        var gameP = document.getElementById('gameHandPetja');
        gameP.innerHTML = cardPetja[k++] + gameP.innerHTML;

        var gameV = document.getElementById('gameHandVasja');     
        gameV.innerHTML = cardVasja[s++] + gameV.innerHTML;
        
        var elmV = gameV.querySelector("li");
        elmV.className = "animate_gameHandV";

        var elmP = gameP.querySelector("li");
        elmP.className = "animate_gameHandP";
        
        
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
