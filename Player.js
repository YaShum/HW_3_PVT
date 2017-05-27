//divide into two parts
function partArray(arr, part) {
    var l, m, n = [];
    for (l = 0, m = arr.length; l < m; l += part) {
        n.push(arr.slice(l, l + part));
    }
    return n;
}

var allHand = partArray(arrColoda, 18);
var handPetja = allHand[0];
var handVasja = allHand[1];


function Player(allHand,handPetja,handVasja) {
    Deck.apply(this, arguments);
    this.allHand = allHand;
    this.handPetja = handPetja;
    this.handVasja = handVasja;
}
Player.prototype = Object.create(Deck.prototype);
Player.prototype.constructor = Player;

