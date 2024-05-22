import {localData} from "../index";
import {deleteCard, switchLikeCard} from "./api";

const cardTemplate = document.querySelector('#card-template').content;
const deletePopup = document.querySelector('.delete__popup');
const buttonPopupDelete = deletePopup.querySelector('.popup__button');


const changeLikeElement = (likeButton) => {
    likeButton.classList.toggle("card__like-button_is-active")
}

const onDeleteCard = (cardElement) => {
    deleteCard(cardElement.id)
        .then(() => {
            cardElement.remove();
        })
        .catch((err) => {
            console.log(err);
        })
}

const onLike = (cardElement, card) => {
    const isLiked = cardElement.querySelector('.card__like-button').classList.contains('card__like-button_is-active');
    const likeAmount = cardElement.querySelector('.like__amount');
    const likeButton = cardElement.querySelector('.card__like-button');

    switchLikeCard(card._id, isLiked).then(res => {
        likeAmount.textContent = res.likes.length || 0;
        changeLikeElement(likeButton);
        return res;
    }).catch((err) => {
        console.log(err);
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

    if (card.likes.some(id => id._id ===localData.userData._id)) { changeLikeElement(likeButton)}

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.id = card._id;
    likeAmount.textContent = card.likes.length ? card.likes.length : 0;

    cardElement.querySelector('.card__title').textContent = card.name;

    likeButton.addEventListener('click', () => onLike(cardElement, card));
    deleteButton.addEventListener('click', () => onDeleteCard(cardElement, card));
    cardImage.addEventListener('click', () => onImageClick(card));

    return cardElement;
}

export {createCard, onLike, onDeleteCard}