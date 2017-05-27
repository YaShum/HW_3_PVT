var suit = {0: "♠", 1: "♣", 2: "♥", 3: "♦"};
var suit2 = {"♠": 's', "♣": 'c', "♥": 'h', "♦": 'd'};
var obj = {1: '6', 2: '7', 3: '8', 4: '9', 5: '10', 6: 'J', 7: 'Q', 8: 'K', 9: 'A'};
var obj2 = {'6': 1, '7': 2, '8': 3, '9': 4, '10': 5, 'J': 6, 'Q': 7, 'K': 8, 'A': 9};
var arrCard = [];
var arrSuit = [];


for (var key in suit) {
    arrSuit.push(suit[key]);
}

for (var card in obj) {
    arrCard.push(obj[card]);
}


//casual trump
console.log(arrSuit);
var randNum = Math.floor(Math.random() * arrSuit.length);
console.log(arrSuit[randNum]);


function Card(suit,suit2,obj,obj2,arrCard,arrSuit,randNum) {
    this.suit = suit;
    this.suit2 = suit2;
    this.obj = obj;
    this.obj2 = obj2;
    this.arrCard = arrCard;
    this.arrSuit = arrSuit;
    this.randNum = randNum;
}


