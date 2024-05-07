import './pages/index.css';
import {createCard} from "./components/card";
import { openModal, closeModal, setCloseModalByClickListeners } from "./components/modal";
import {initialCards} from "./components/cards";

//Контейнер таблицы карточек
const cardsContainer = document.querySelector('.places__list');
//Кнопки открытия попапов
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
//Попапы
const cardModal = document.querySelector(".popup_type_new-card");
const profileModal = document.querySelector(".popup_type_edit");
const imageModal = document.querySelector(".popup_type_image");
//Поля профиля
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
//Поля введения данных для добавления каритинки
const popupCaption = imageModal.querySelector('.popup__caption');
const popupImage = imageModal.querySelector('.popup__image');
//Список попапов
const popupList = [cardModal, profileModal, imageModal];

export const openImagePopup = (evt) => {
    popupCaption.textContent = evt.target.alt;
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;

    openModal(imageModal);
}

const onDeleteCard = (cardElement) => { cardElement.remove() }
const onLike = (cardElement) => {
    cardElement.querySelector('.card__like-button').classList.toggle("card__like-button_is-active")
};

function renderCards(cards) {
    cards.forEach( x => {
        cardsContainer.appendChild(createCard(x, onDeleteCard, onLike, openImagePopup));
    })
}

renderCards(initialCards);
setCloseModalByClickListeners(popupList);

const changeProfile = (name, description) => {
    profileName.textContent = name;
    profileDescription.textContent = description;
}

const handleAddCardFormSubmit = (e) => {
    e.preventDefault();

    const form = document.forms['new-place'];

    const card = {
        name: form.elements['place-name'].value,
        link: form.elements['link'].value
    }

    cardsContainer.prepend(createCard(card, onDeleteCard, onLike, openImagePopup));
    form.reset()
    closeModal(cardModal);
}

const handleEditProfileFormSubmit = (e) => {
    e.preventDefault();

    const form = document.forms['edit-profile'];

    changeProfile(form.elements.name.value, form.elements.description.value);
    closeModal(profileModal);
}

const openProfileEditForm = () => {
    document.forms['edit-profile'].name.value = profileName.textContent;
    document.forms['edit-profile'].description.value = profileDescription.textContent;
    openModal(profileModal);
}

profileEditButton.addEventListener("click", openProfileEditForm);
cardAddButton.addEventListener("click", () => {
    openModal(cardModal)
});

//обработка submit
cardModal.addEventListener("submit", handleAddCardFormSubmit);
profileModal.addEventListener("submit", handleEditProfileFormSubmit);

