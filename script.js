
const dayInput = document.getElementById("dayInput");
const nightInput = document.getElementById("nightInput");
const resultMessage = document.getElementById("resultMessage");
// const cards = document.getElementsByClassName("grid-card");
const gridContainer = document.getElementsByClassName("grid-container");
const shirt = document.getElementById("shirts");
const cardText = document.getElementsByClassName("cardText");

  const button = document.getElementById("submit");
  button.addEventListener("click", results)
  
    

function results(){
    resultMessage.innerText=`For a ${dayInput.value} day and ${nightInput.value} night trip, you'll need:`;
    gridContainer[0].style.visibility='visible';
    // shirt.innerHTML=dayInput.value;
    
    for (let i = 0; i < cardText.length; i++) {
        cardText[i].append(dayInput.value)
    }
    
    // cardText[0].append(dayInput.value);
}
