// Seleção das classes
const detailsJs = document.querySelector(".details-js");
const detailsCard = document.querySelectorAll(".details-card");
const copy = document.querySelector(".card");
const details = document.querySelector(".details-js");


// Clone dos Cards 
const clone = copy.cloneNode(true);
details.appendChild(clone);


// Função para mudar o card
const activateCard = (cardToActivate) => {
        
const cardPadrao = document.querySelector("#card-img");
cardPadrao.classList.remove("active");
   
detailsCard.forEach(card => {
    card.classList.remove("active");
});
     
cardToActivate.classList.add("active");
};


// Evento no carrossel
detailsJs.addEventListener("click", (event) => {
    const cardId = event.target.dataset.card;

    if (cardId) {
        const cardToActivate = document.querySelector(`#${cardId}`);
        if (cardToActivate) {
            activateCard(cardToActivate);
        }
    }
});




