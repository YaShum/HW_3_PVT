var gameP = document.getElementById('gameHandPetja');
var gameV = document.getElementById('gameHandVasja');

game.onclick = function () {
    document.getElementById('but').style.display = "none";
    var l = 0,
        m = 0,
        k = 0,
        s = 0;
    var timers = setTimeout(function func() {
        wrapCard.classList.add('animate');
        suitCard.classList.add('animate_suit');
        document.getElementById('suitCard').innerHTML = arrSuit[randNum];
        
        if(document.getElementById('suitCard').classList.contains('animate_suit')){
            setTimeout(function(){ document.getElementById('wrapCard').style.display = "none";},1000);
        }
        
        gameP.innerHTML = cardPetja[k++] + gameP.innerHTML;
        gameV.innerHTML = cardVasja[s++] + gameV.innerHTML;
        
    var r = 0,
        t = 0;
        var elmP = gameP.childNodes[t++];
        var elmV = gameV.childNodes[r++];

        
        
       var timersFr = setTimeout(function func1(){                     
                elmP.className = "animate_gameHandP";
                elmV.className = "animate_gameHandV";           
          }, 1500);
        
        var pointP = document.getElementById('gamePointsPetja');
        pointP.innerHTML = numPetja[l++];

        var pointV = document.getElementById('gamePointsVasja');
        pointV.innerHTML = numVasja[m++];
        
        var numPointP = numPetja[l].replace(/[^0-9]/gim,'');
        var numPointV = numVasja[m].replace(/[^0-9]/gim,'');

        function pointWinner() {
            if (numPointV > numPointP) {
                elmV.className += "winnerAnim";
                console.log(numPointV);
                console.log(numPointP);
            }
            else if (numPointV < numPointP) {
                elmP.className += "winnerAnim";
                console.log(numPointP);
                console.log(numPointV);
            }
            else if (numPointP == numPointV) {

            }
        }
        pointWinner();

        timers = setTimeout(func, 5000);
        if (k > 17 && l > 17) {
            clearTimeout(timers);
            setTimeout(function(){
                    document.getElementById('backC1').style.display = "none";
                    document.getElementById('backC2').style.display = "none";
            },1000);
        }
    }, 1000);
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
