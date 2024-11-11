// Seleção das classes
const detailsJs = document.querySelector(".details-js");
const detailsCard = document.querySelectorAll(".details-card");
const copy = document.querySelector(".card");
const bars = document.querySelector("#bars");
const x = document.querySelector("#x");
const nav = document.querySelector(".nav-menu");
const link = document.querySelectorAll(".nav-list a");

// Clone dos Cards
const clone = copy.cloneNode(true);
detailsJs.appendChild(clone);

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

// Função para mudar o card
const activateCard = (cardToActivate) => {
  const cardPadrao = document.querySelector("#card-img");

  cardPadrao.classList.remove("active");

  detailsCard.forEach((card) => {
    card.classList.remove("active");
  });

  cardToActivate.classList.add("active");
  console.log(cardToActivate);

  const colorCard = cardToActivate.getAttribute("data-color");

  cardToActivate.style.border = `3px solid #${colorCard}`;

  const spanElement = document.querySelectorAll(".details-card span");

  spanElement.forEach((span) => {
    span.style.color = `#${colorCard}`;
  });
};

// Menu Hambúrguer
function updateMenu() {
  if (window.innerWidth > 768) {
    bars.style.display = "none";
    x.style.display = "none";
    x.classList.remove("active");
    nav.classList.remove("active");
  } else {
    if (nav.classList.contains("active")) {
      bars.style.display = "none";
      x.style.display = "block";
      x.classList.add("active");
    } else {
      bars.style.display = "block";
      x.style.display = "none";
      x.classList.remove("active");
    }
  }
}

window.addEventListener("load", updateMenu);
window.addEventListener("resize", updateMenu);

bars.addEventListener("click", () => {
  nav.classList.add("active");
  updateMenu();
});

x.addEventListener("click", () => {
  nav.classList.remove("active");
  updateMenu();
});

link.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("active");
    updateMenu();
  });
});
