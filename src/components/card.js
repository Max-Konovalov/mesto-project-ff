export {createCard, onLike, onDeleteCard}

import {openModal, closeModal} from "./modal";
import {localData} from "../index";
import {deleteCard, switchLikeCard} from "./api";

const cardTemplate = document.querySelector('#card-template').content;
const deletePopup = document.querySelector('.delete__popup');


const changeLikeElement = (cardElement) => {
    cardElement.querySelector('.card__like-button').classList.toggle("card__like-button_is-active")
}

const onDeleteCard = (cardElement, card) => {
    console.log(cardElement.id);
    launchDeleteCard(cardElement, card);
}
const onLike = (cardElement, card) => {
    let isLiked = cardElement.querySelector('.card__like-button').classList.contains('card__like-button_is-active');
    let likeAmount = cardElement.querySelector('.like__amount');

    switchLikeCard(card._id, isLiked).then(res => {
        likeAmount.textContent = res.likes.length || 0;
        changeLikeElement(cardElement);
        return res;
    });
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

    if (card.likes.some(id => id._id ===localData.userData._id)) { changeLikeElement(cardElement)}

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.id = card._id;
    likeAmount.textContent = card.likes.length ? card.likes.length : 0;

    cardElement.querySelector('.card__title').textContent = card.name;

    likeButton.addEventListener('click', () => onLike(cardElement, card));
    deleteButton.addEventListener('click', () => onDeleteCard(cardElement, card));
    cardImage.addEventListener('click', onImageClick);

    return cardElement;
}


const launchDeleteCard = (cardElement, card) => {
    openModal(deletePopup);
    console.log("1");
    const buttonPopupDelete = deletePopup.querySelector('.popup__button');
    console.log("2");
    buttonPopupDelete.addEventListener("click", (evt) => {
        buttonPopupDelete.textContent = "Удаление...";
        deleteCard(cardElement.id)
            .then(() => {
                console.log("sss");
                cardElement.remove();
                closeModal(deletePopup);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally((res) => {
                buttonPopupDelete.textContent = "Да";
            });
        console.log("3");
    });
}




