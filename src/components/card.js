import {openModal, closeModal} from "./modal";

export {createCard, onLike, onDeleteCard}
import {localData} from "../index";
import {deleteCard} from "./api";

const cardTemplate = document.querySelector('#card-template').content;
const deletePopup = document.querySelector('.delete__popup');


const onDeleteCard = (cardElement, card) => {
    console.log(card);
    launchDeleteCard(cardElement, card);
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


    if (card.owner._id !== localData.userData._id) {
        deleteButton.classList.add("card__delete-button-hidden");
        deleteButton.disabled = true;
    }

    cardImage.src = card.link;
    cardImage.alt = card.name;
    likeAmount.textContent = card.likes.length ? card.likes.length : 0;

    cardElement.querySelector('.card__title').textContent = card.name;

    likeButton.addEventListener('click', () => onLike(cardElement));
    deleteButton.addEventListener('click', () => onDeleteCard(cardElement, card));
    cardImage.addEventListener('click', onImageClick);

    return cardElement;
}


const launchDeleteCard = (cardElement, card) => {
    openModal(deletePopup);
    const buttonPopupDelete = deletePopup.querySelector('.popup__button');
    buttonPopupDelete.addEventListener("click", (evt) => {
        buttonPopupDelete.textContent = "Удаление...";
        deleteCard(card._id)
            .then(() => {
                cardElement.remove();
                closeModal(deletePopup);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally((res) => {
                buttonPopupDelete.textContent = "Да";
            });
    });
}




