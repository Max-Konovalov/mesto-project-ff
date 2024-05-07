export {createCard}

const cardTemplate = document.querySelector('#card-template').content;

const createCard = (card, onDeleteCard, onLike, onImageClick) => {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');

    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;

    likeButton.addEventListener('click', () => onLike(cardElement));
    deleteButton.addEventListener('click', () => onDeleteCard(cardElement));
    cardImage.addEventListener('click', onImageClick);

    return cardElement;
}




