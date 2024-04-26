export {createCard, showCards}
function createCard(card) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardElement.querySelector('.card__image').setAttribute('src', card.link);
    cardElement.querySelector('.card__image').setAttribute('alt', card.name);
    cardElement.querySelector('.card__title').textContent = card.name;

    cardElement.querySelector('.card__delete-button').addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
    return cardElement;
}

export function deleteCard(card) {
    card.remove();
}

function showCards(cards) {
    const placeList = document.querySelector('.places__list');

    cards.forEach( x => {
        placeList.appendChild(createCard(x, deleteCard));
    })
}
