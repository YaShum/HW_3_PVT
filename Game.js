//start game
var cardVasja = [];
var cardPetja = [];
var numVasja = [];
var numPetja = [];
var kolSuit = [];
var PetjaPoint = VasjaPoint = 0;

for (var i = 0; i < 18; i++) {
    var P = handPetja.pop();
    var V = handVasja.pop();

    if (P.suit == arrSuit[randNum] && V.suit == arrSuit[randNum]) {
        if (obj2[V.num] > obj2[P.num]) {
            VasjaPoint++;
        }
        else {
            PetjaPoint++;
        }
    }
    else if (P.suit == arrSuit[randNum]) {
        PetjaPoint++;
    }
    else if (V.suit == arrSuit[randNum]) {
        VasjaPoint++;
    }
    else if (obj2[V.num] > obj2[P.num]) {
        VasjaPoint++;
    }
    else if (obj2[V.num] < obj2[P.num]) {
        PetjaPoint++;
    }
    else if (obj2[V.num] == obj2[P.num]) {

    }

    cardVasja[i] = ('<li><img src="img_cards/' + suit2[V.suit] + '_' + obj2[V.num] + '.jpg">' + '</li>');
    cardPetja[i] = ('<li><img src="img_cards/' + suit2[P.suit] + '_' + obj2[P.num] + '.jpg">' + '</li>');

    numVasja[i] = ('<li>' + VasjaPoint + '</li>');
    numPetja[i] = ('<li>' + PetjaPoint + '</li>');
}

arrSuit.forEach(function (item) {
    var d = 0;
    kolSuit[d] = ('<span>' + item + '</span>');
    var screenCircke = document.getElementById('wrapCard');
    screenCircke.innerHTML = kolSuit[d++] + screenCircke.innerHTML;
});


function Game(PetjaPoint, VasjaPoint, P, V, b, cardVasja, cardPetja, numVasja, numPetja, kolSuit) {
    Player.apply(this, arguments);
    this.PetjaPoint = PetjaPoint;
    this.VasjaPoint = VasjaPoint;
    this.P = P;
    this.V = V;
    this.b = b;
    this.cardVasja = cardVasja;
    this.cardPetja = cardPetja;
    this.numVasja = numVasja;
    this.numPetja = numPetja;
    this.kolSuit = kolSuit;
}
Game.prototype = Object.create(Player.prototype);
Game.prototype.constructor = Game;
