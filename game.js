 const cardsColor = ["red", "red", "salmon", "salmon","palevioletred","palevioletred",
 "burlywood","burlywood","lightskyblue","lightskyblue","yellow","yellow", "violet",
 "violet","blue","blue","green","green" ];

 let cards = document.querySelectorAll("div");
 cards = [...cards];

 const startTimer = new Date().getTime();

 let activeCard = "";

 const clickCard = function(){}

 const init = function() {
     cards.forEach(card =>{
         const position = Math.floor(Math.random()*cardsColor.length);
         card.classList.add(cardsColor[position]);
         cardsColor.splice(position, 1);
     })     

     setTimeout(function(){
        cards.forEach(card =>{
            card.classList.add("hidden");
            card.addEventListener("click", clickCard);
        })
     },2000)
 }
 init()