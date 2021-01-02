const mtg = require('mtgsdk');

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let cardArr = [card1, card2, card3, card4, card5, card6];
let classArr = ["classRed", "classRed", "classBlue", "classBlue", "classGreen", "classGreen"];
function arrayShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
arrayShuffle(classArr);
console.log(classArr)
for(let i = 0; i < cardArr.length; i++) {
    cardArr[i].className = classArr[i];
};
console.log(card1.className, card2.className, card3.className, card4.className, card5.className, card6.className);

mtg.card.all({ supertypes: 'legendary', types: 'creature', colors: 'red,white' })
.on('data', function (card) {
    console.log(card.name)
});