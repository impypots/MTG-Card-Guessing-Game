let score = 0;
//Card images will not change until gameReady is equal to true.
let gameReady = false;
let url = "https://api.magicthegathering.io/v1/cards?supertypes=legendary&types=creature&colors=red";
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let scoreNum = document.getElementById("score-num");
let ready = document.getElementById("ready");
//These three variables will hold the image url fetched from the MTG API.
//These card images can be colors other than R, B, or G, but the colors make it easier for me to differentiate between them.
let cardRed;
let cardBlue;
let cardGreen;
//The prevCard object will contain the previous card clicked, as well as the function associated with that card.
let prevCard = {
    previous: null,
    click: null
}
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
scoreNum.innerText = `Score: ${score}`

//Fetches three image urls from the MTGAPI.
function fetchRandom() {
    fetch(url)
    .then(response=> response.json())
    .then(function(data) {
        console.log(data.cards[0], data.cards[0].imageUrl);
        cardRed = data.cards[Math.floor(Math.random() * data.cards.length)].imageUrl;
        cardBlue = data.cards[Math.floor(Math.random() * data.cards.length)].imageUrl;
        cardGreen = data.cards[Math.floor(Math.random() * data.cards.length)].imageUrl;
        if(cardRed === undefined || cardRed === cardBlue || cardRed === cardGreen){
            console.log("CardRed was undefined!")
            cardRed = "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=489504&type=card"
        }
        if(cardBlue === undefined || cardBlue === cardGreen || cardBlue === cardRed){
            console.log("CardBlue was undefined!")
            cardBlue = "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=460980&type=card"
        }
        if(cardGreen === undefined || cardGreen === cardRed || cardGreen || cardBlue){
            console.log("CardGreen was undefined!")
            cardGreen = "https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=4566&type=card"
        }
        console.log("RED: " + cardRed, "BLUE: " + cardBlue, cardBlue, "GREEN: " + cardGreen);
        gameReady = true;
        ready.innerText = 'Ready!'
    })
}
fetchRandom()
//These are the functions called when the card images are clicked.
//The functions are called when the card of the corresponding number is clicked (For ex., clicking card1 will trigger cardClick1).
function cardClick1() {
    if(gameReady === true){
    if(prevCard.previous === null) {
        prevCard.previous = card1;
        prevCard.click = cardClick1;
        if (card1.className === "classRed") {
            card1.src = cardRed
        } else if (card1.className === "classBlue") {
            card1.src = cardBlue
        } else {
            card1.src = cardGreen
        }
    } else {
        if(prevCard.previous.className === card1.className){
            if (card1.className === "classRed") {
                card1.src = cardRed
            } else if (card1.className === "classBlue") {
                card1.src = cardBlue
            } else {
                card1.src = cardGreen
            }
            card1.removeEventListener("click", cardClick1);
            prevCard.previous.removeEventListener("click", prevCard.click);
            score += 1;
            scoreNum.innerText = `Score: ${score}`;
            prevCard.previous = null;
            prevCard.click = null;
            if(score >= 3){
                alert("Omfg!!???!! You're so smart, you win!!!!")
            }
        } else {
            alert("Sorry pal, those don't match.");
            //Event listeners are removed her while the user gets to look at the non-matching cards.
            card1.removeEventListener("click", cardClick1);
            card2.removeEventListener("click", cardClick2);
            card3.removeEventListener("click", cardClick3);
            card4.removeEventListener("click", cardClick4);
            card5.removeEventListener("click", cardClick5);
            card6.removeEventListener("click", cardClick6);
        if (card1.className === "classRed") {
            card1.src = cardRed
        } else if (card1.className === "classBlue") {
            card1.src = cardBlue
        } else {
            card1.src = cardGreen
        }
        setTimeout(()=> {
            prevCard.previous.src = "https://i.redd.it/qnnotlcehu731.jpg";
            card1.src = "https://i.redd.it/qnnotlcehu731.jpg";
            prevCard.previous = null;
        prevCard.click = null;
        card1.addEventListener("click", cardClick1, false);
        card2.addEventListener("click", cardClick2, false);
        card3.addEventListener("click", cardClick3, false);
        card4.addEventListener("click", cardClick4, false);
        card5.addEventListener("click", cardClick5, false);
        card6.addEventListener("click", cardClick6, false);
        }, 3000);
        }
    }
    }
};

function cardClick2() {
    if(gameReady === true){
    if(prevCard.previous === null) {
        prevCard.previous = card2;
        prevCard.click = cardClick2;
        if (card2.className === "classRed") {
            card2.src = cardRed
        } else if (card2.className === "classBlue") {
            card2.src = cardBlue
        } else {
            card2.src = cardGreen
        }
    } else {
        if(prevCard.previous.className === card2.className){
            if (card2.className === "classRed") {
                card2.src = cardRed
            } else if (card2.className === "classBlue") {
                card2.src = cardBlue
            } else {
                card2.src = cardGreen
            }
            card2.removeEventListener("click", cardClick2);
            prevCard.previous.removeEventListener("click", prevCard.click);
            score += 1;
            scoreNum.innerText = `Score: ${score}`;
            prevCard.previous = null;
            prevCard.click = null;
            if(score >= 3){
                alert("Omfg!!???!! You're so smart, you win!!!!")
            }
        } else {
            alert("Sorry pal, those don't match.");
            card1.removeEventListener("click", cardClick1);
            card2.removeEventListener("click", cardClick2);
            card3.removeEventListener("click", cardClick3);
            card4.removeEventListener("click", cardClick4);
            card5.removeEventListener("click", cardClick5);
            card6.removeEventListener("click", cardClick6);
        if (card2.className === "classRed") {
            card2.src = cardRed
        } else if (card2.className === "classBlue") {
            card2.src = cardBlue
        } else {
            card2.src = cardGreen
        }
        setTimeout(()=> {
            prevCard.previous.src = "https://i.redd.it/qnnotlcehu731.jpg";
            card2.src = "https://i.redd.it/qnnotlcehu731.jpg";
            prevCard.previous = null;
        prevCard.click = null;
        card1.addEventListener("click", cardClick1, false);
        card2.addEventListener("click", cardClick2, false);
        card3.addEventListener("click", cardClick3, false);
        card4.addEventListener("click", cardClick4, false);
        card5.addEventListener("click", cardClick5, false);
        card6.addEventListener("click", cardClick6, false);
        }, 3000);
        }
    }
    }
};

function cardClick3() {
    if(gameReady === true){
    if(prevCard.previous === null) {
        prevCard.previous = card3;
        prevCard.click = cardClick3;
        if (card3.className === "classRed") {
            card3.src = cardRed
        } else if (card3.className === "classBlue") {
            card3.src = cardBlue
        } else {
            card3.src = cardGreen
        }
    } else {
        if(prevCard.previous.className === card3.className){
            if (card3.className === "classRed") {
                card3.src = cardRed
            } else if (card3.className === "classBlue") {
                card3.src = cardBlue
            } else {
                card3.src = cardGreen
            }
            card3.removeEventListener("click", cardClick3);
            prevCard.previous.removeEventListener("click", prevCard.click);
            score += 1;
            scoreNum.innerText = `Score: ${score}`;
            prevCard.previous = null;
            prevCard.click = null;
            if(score >= 3){
                alert("Omfg!!???!! You're so smart, you win!!!!")
            }
        } else {
            alert("Sorry pal, those don't match.");
            card1.removeEventListener("click", cardClick1);
            card2.removeEventListener("click", cardClick2);
            card3.removeEventListener("click", cardClick3);
            card4.removeEventListener("click", cardClick4);
            card5.removeEventListener("click", cardClick5);
            card6.removeEventListener("click", cardClick6);
        if (card3.className === "classRed") {
            card3.src = cardRed
        } else if (card3.className === "classBlue") {
            card3.src = cardBlue
        } else {
            card3.src = cardGreen
        }
        setTimeout(()=> {
            prevCard.previous.src = "https://i.redd.it/qnnotlcehu731.jpg";
            card3.src = "https://i.redd.it/qnnotlcehu731.jpg";
            prevCard.previous = null;
        prevCard.click = null;
        card1.addEventListener("click", cardClick1, false);
        card2.addEventListener("click", cardClick2, false);
        card3.addEventListener("click", cardClick3, false);
        card4.addEventListener("click", cardClick4, false);
        card5.addEventListener("click", cardClick5, false);
        card6.addEventListener("click", cardClick6, false);
        }, 3000);
    }
    }
}};

function cardClick4() {
    if(gameReady === true){
    if(prevCard.previous === null) {
        prevCard.previous = card4;
        prevCard.click = cardClick4;
        if (card4.className === "classRed") {
            card4.src = cardRed
        } else if (card4.className === "classBlue") {
            card4.src = cardBlue
        } else {
            card4.src = cardGreen
        }
    } else {
        if(prevCard.previous.className === card4.className){
            if (card4.className === "classRed") {
                card4.src = cardRed
            } else if (card4.className === "classBlue") {
                card4.src = cardBlue
            } else {
                card4.src = cardGreen
            }
            card4.removeEventListener("click", cardClick4);
            prevCard.previous.removeEventListener("click", prevCard.click);
            score += 1;
            scoreNum.innerText = `Score: ${score}`;
            prevCard.previous = null;
            prevCard.click = null;
            if(score >= 3){
                alert("Omfg!!???!! You're so smart, you win!!!!")
            }
        } else {
            alert("Sorry pal, those don't match.");
            card1.removeEventListener("click", cardClick1);
            card2.removeEventListener("click", cardClick2);
            card3.removeEventListener("click", cardClick3);
            card4.removeEventListener("click", cardClick4);
            card5.removeEventListener("click", cardClick5);
            card6.removeEventListener("click", cardClick6);
        if (card4.className === "classRed") {
            card4.src = cardRed
        } else if (card4.className === "classBlue") {
            card4.src = cardBlue
        } else {
            card4.src = cardGreen
        }
        setTimeout(()=> {
            prevCard.previous.src = "https://i.redd.it/qnnotlcehu731.jpg";
            card4.src = "https://i.redd.it/qnnotlcehu731.jpg";
            prevCard.previous = null;
        prevCard.click = null;
        card1.addEventListener("click", cardClick1, false);
        card2.addEventListener("click", cardClick2, false);
        card3.addEventListener("click", cardClick3, false);
        card4.addEventListener("click", cardClick4, false);
        card5.addEventListener("click", cardClick5, false);
        card6.addEventListener("click", cardClick6, false);
        }, 3000);
    }
    }
}};

function cardClick5() {
    if(gameReady === true){
    if(prevCard.previous === null) {
        prevCard.previous = card5;
        prevCard.click = cardClick5;
        if (card5.className === "classRed") {
            card5.src = cardRed
        } else if (card5.className === "classBlue") {
            card5.src = cardBlue
        } else {
            card5.src = cardGreen
        }
    } else {
        if(prevCard.previous.className === card5.className){
            if (card5.className === "classRed") {
                card5.src = cardRed
            } else if (card5.className === "classBlue") {
                card5.src = cardBlue
            } else {
                card5.src = cardGreen
            }
            card5.removeEventListener("click", cardClick5);
            prevCard.previous.removeEventListener("click", prevCard.click);
            score += 1;
            scoreNum.innerText = `Score: ${score}`;
            prevCard.previous = null;
            prevCard.click = null;
            if(score >= 3){
                alert("Omfg!!???!! You're so smart, you win!!!!")
            }
        } else {
            alert("Sorry pal, those don't match.");
            card1.removeEventListener("click", cardClick1);
            card2.removeEventListener("click", cardClick2);
            card3.removeEventListener("click", cardClick3);
            card4.removeEventListener("click", cardClick4);
            card5.removeEventListener("click", cardClick5);
            card6.removeEventListener("click", cardClick6);
        if (card5.className === "classRed") {
            card5.src = cardRed
        } else if (card5.className === "classBlue") {
            card5.src = cardBlue
        } else {
            card5.src = cardGreen
        }
        setTimeout(()=> {
            prevCard.previous.src = "https://i.redd.it/qnnotlcehu731.jpg";
            card5.src = "https://i.redd.it/qnnotlcehu731.jpg";
            prevCard.previous = null;
        prevCard.click = null;
        card1.addEventListener("click", cardClick1, false);
        card2.addEventListener("click", cardClick2, false);
        card3.addEventListener("click", cardClick3, false);
        card4.addEventListener("click", cardClick4, false);
        card5.addEventListener("click", cardClick5, false);
        card6.addEventListener("click", cardClick6, false);
        }, 3000);
    }
    }
}};

function cardClick6() {
    if(gameReady === true){
    if(prevCard.previous === null) {
        prevCard.previous = card6;
        prevCard.click = cardClick6;
        if (card6.className === "classRed") {
            card6.src = cardRed
        } else if (card6.className === "classBlue") {
            card6.src = cardBlue
        } else {
            card6.src = cardGreen
        }
    } else {
        if(prevCard.previous.className === card6.className){
            if (card6.className === "classRed") {
                card6.src = cardRed
            } else if (card6.className === "classBlue") {
                card6.src = cardBlue
            } else {
                card6.src = cardGreen
            }
            card6.removeEventListener("click", cardClick6);
            prevCard.previous.removeEventListener("click", prevCard.click);
            score += 1;
            scoreNum.innerText = `Score: ${score}`;
            prevCard.previous = null;
            prevCard.click = null;
            if(score >= 3){
                alert("Omfg!!???!! You're so smart, you win!!!!")
            }
        } else {
            alert("Sorry pal, those don't match.");
            card1.removeEventListener("click", cardClick1);
            card2.removeEventListener("click", cardClick2);
            card3.removeEventListener("click", cardClick3);
            card4.removeEventListener("click", cardClick4);
            card5.removeEventListener("click", cardClick5);
            card6.removeEventListener("click", cardClick6);
            if (card6.className === "classRed") {
                card6.src = cardRed
            } else if (card6.className === "classBlue") {
                card6.src = cardBlue
            } else {
                card6.src = cardGreen
            }
            setTimeout(()=> {
                prevCard.previous.src = "https://i.redd.it/qnnotlcehu731.jpg";
                card6.src = "https://i.redd.it/qnnotlcehu731.jpg";
                prevCard.previous = null;
                prevCard.click = null;
                card1.addEventListener("click", cardClick1, false);
                card2.addEventListener("click", cardClick2, false);
                card3.addEventListener("click", cardClick3, false);
                card4.addEventListener("click", cardClick4, false);
                card5.addEventListener("click", cardClick5, false);
                card6.addEventListener("click", cardClick6, false);
            }, 3000);
        }
    }
    }
};

console.log(prevCard)
card1.addEventListener("click", cardClick1, false);
card2.addEventListener("click", cardClick2, false);
card3.addEventListener("click", cardClick3, false);
card4.addEventListener("click", cardClick4, false);
card5.addEventListener("click", cardClick5, false);
card6.addEventListener("click", cardClick6, false);