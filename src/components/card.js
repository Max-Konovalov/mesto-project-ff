function createCard(card, deleteCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardElement.querySelector('.card__image').setAttribute('src', card.link);
    cardElement.querySelector('.card__image').setAttribute('alt', card.name);
    cardElement.querySelector('.card__title').textContent = card.name;

    cardElement.querySelector('.card__delete-button').addEventListener('click', (e) => {
        deleteCard(e.target.parentElement);
    })
    return cardElement;
}

function deleteCard(card) {
    card.remove();
}

export default function showCards(cards) {
    const placeList = document.querySelector('.places__list');

    cards.forEach( x => {
        placeList.appendChild(createCard(x, deleteCard));
    })
}
