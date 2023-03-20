//import local json file
import data from './incoherent.json' assert {type :'json'}


let homophoneCard = document.getElementById("homophone-card"); //to access dataset

//accessing the different catogories in the json file
let gibber = data.gibberish
let oneWord = data.oneword
let weird = data.weird

//set cardType
let cardType = oneWord
let currentModeText = document.getElementById("currentMode")

//access buttons
document.getElementById("anotherbtn").addEventListener('click',rePick);
document.getElementById("gibberbtn").addEventListener('click',changeGib);
document.getElementById("onewordbtn").addEventListener('click',changeOne);
document.getElementById("weirdbtn").addEventListener('click',changeWeird);


//for mobile
document.getElementById("anotherbtn").addEventListener('touchstart',rePick);
document.getElementById("gibberbtn").addEventListener('touchstart',changeGib);
document.getElementById("onewordbtn").addEventListener('touchstart',changeOne);
document.getElementById("weirdbtn").addEventListener('touchstart',changeWeird);


//function to generate random number so a random pard is picked
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//function so when button clicked another card from the same cardtype is picked
function rePick(){
    let i = randomNumber(0, cardType.length)
    homophoneCard.dataset.word =cardType[i].word;
    homophoneCard.dataset.homophone = cardType[i].homophone;

}


//function to change card types
function changeGib(){
    cardType = gibber
    currentModeText.innerHTML = "Current Mode: Gibberish";
}
function changeOne(){
    cardType = oneWord
    currentModeText.innerHTML = "Current Mode: One Word";
}
function changeWeird(){
    cardType = weird
    currentModeText.innerHTML = "Current Mode: Weird Sentences";

}