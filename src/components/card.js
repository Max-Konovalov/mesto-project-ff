import {openModal} from "./modal";

export {createCard}

const cardTemplate = document.querySelector('#card-template').content;
const imageModal = document.querySelector(".popup_type_image");
const popupCaption = imageModal.querySelector('.popup__caption');
const popupImage = imageModal.querySelector('.popup__image');

const onDeleteCard = (evt) => { evt.target.closest('.places__item').remove() }
const onLike = (evt) => { evt.target.classList.toggle("card__like-button_is-active") };

const onImageClick = (evt) => {
        if (evt.target.classList.contains('card__image')) {
            popupCaption.textContent = evt.target.alt;
            popupImage.src = evt.target.src;
            popupImage.alt = evt.target.alt;

            openModal(imageModal);
        }
}

function createCard(card) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;

    cardElement.querySelector('.card__like-button').addEventListener('click', onLike);
    cardElement.addEventListener('click', onImageClick);
    cardElement.querySelector('.card__delete-button').addEventListener('click', onDeleteCard);

    return cardElement;

}




