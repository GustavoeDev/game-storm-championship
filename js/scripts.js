document.addEventListener("DOMContentLoaded", () => {

const activateCard = (cardToActivate) => {
        
const cardPadrao = document.querySelector("#card-img");
cardPadrao.classList.remove("active");
   
document.querySelectorAll(".details-card").forEach(card => {
    card.classList.remove("active");
});
     
cardToActivate.classList.add("active");
};

    
const detailsJs = document.querySelector(".details-js");

detailsJs.addEventListener("click", (event) => {
        
    if (event.target.matches(".img-cod, .img-valorant, .img-pubg, .img-lol, .img-fifa")) {
        const imgClass = event.target.classList[0]; 
        const cardId = imgClass.replace('img-', 'card-'); 
        const cardToActivate = document.querySelector(`#${cardId}`);
        if (cardToActivate) {
            activateCard(cardToActivate);
        }
    }
});

   
const copy = document.querySelector(".card");
const clone = copy.cloneNode(true);
const details = document.querySelector(".details-js");
details.appendChild(clone);

// Verificação de Classes
const clonedImages = details.querySelectorAll('.card img');
clonedImages.forEach(img => {
    img.classList.add(img.src.split('/').pop().split('.')[0]); // Adiciona a classe apropriada
});
});