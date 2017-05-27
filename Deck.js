var arrResult = [];
for (var i = 0; i < arrSuit.length; i++) {
    for (var j = 0; j < arrCard.length; j++) {
        obj = {};
        obj.suit = arrSuit[i];
        obj.num = arrCard[j];
        arrResult.push(obj);
    }
}
console.log(arrResult);

//random order
Array.prototype.shuffle = function () {
    return this.sort(function () {
        return 0.5 - Math.random();
    });
};

var arrColoda = arrResult.shuffle();


function Deck(arrResult,arrColoda) {
    Card.apply(this, arguments);
    this.arrResult = arrResult;
    this.arrColoda = arrColoda;
}
Deck.prototype = Object.create(Card.prototype);
Deck.prototype.constructor = Deck;
