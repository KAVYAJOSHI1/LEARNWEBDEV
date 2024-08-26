//anonyous objects objects without name

class Card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}

let card1=new Card(2,"hearts");
let card2=new Card(3,"diamonds");
let card3=new Card(4,"spades");
let card4=new Card(5,"clubs");
let card5=new Card(6,"hearts");
let card6=new Card(7,"diamonds");

let cards=[card1,card2,card3,card4,card5,card6];

console.log(cards);
console.log(cards[0].value+cards[0].suit);