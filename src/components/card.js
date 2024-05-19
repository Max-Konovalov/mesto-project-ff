export {createCard, onLike, onDeleteCard}

const cardTemplate = document.querySelector('#card-template').content;
const deletePopup = document.querySelector('.delete__popup');


const onDeleteCard = (cardElement) => {
    launchDeleteCard(cardElement);
    cardElement.remove()
}
const onLike = (cardElement) => {
    cardElement.querySelector('.card__like-button').classList.toggle("card__like-button_is-active")
};

const createCard = (card, onDeleteCard, onLike, onImageClick) => {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const likeAmount = cardElement.querySelector('.like__amount');

    const likeButton = cardElement.querySelector('.card__like-button');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = card.link;
    cardImage.alt = card.name;

    likeAmount.textContent = card.likes.length ? card.likes.length : 0;



    cardElement.querySelector('.card__title').textContent = card.name;

    likeButton.addEventListener('click', () => onLike(cardElement));
    deleteButton.addEventListener('click', () => onDeleteCard(cardElement));
    cardImage.addEventListener('click', onImageClick);

    return cardElement;
}


const launchDeleteCard = (event, cardId) => {
    const selectedCard = event.target.closest(".card");
    openModal(popupDelete);
    buttonPopupDelete.addEventListener("click", (evt) => {
        buttonPopupDelete.textContent = "Удаление...";
        deleteCard(cardId._id)
            .then((res) => {
                selectedCard.remove();
                closeModal(popupDelete);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally((res) => {
                buttonPopupDelete.textContent = "Да";
            });
    });
}




