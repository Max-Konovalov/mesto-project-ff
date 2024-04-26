import './pages/index.css';
import {showCards, createCard} from "./components/card";
import { openModal, closeModal } from "./components/modal";

const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

showCards(initialCards);

const placesList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');





profileEditButton.addEventListener("click", showProfileModal);
profileAddButton.addEventListener("click", showAddCardModal);
placesList.addEventListener("click", function (evt) {
    if (evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle("card__like-button_is-active");
    }
});

placesList.addEventListener("click", function (evt) {
    if (evt.target.classList.contains('card__image')) {
        showImageModal(evt);
    }
});

function showProfileModal() {
    const profileModal = document.querySelector(".popup_type_edit");
    profileModal.addEventListener("submit", editProfileHandler);
    openModal(profileModal);
}

function showAddCardModal() {
    const cardModal = document.querySelector(".popup_type_new-card");
    cardModal.addEventListener("submit", addCardHandler);
    openModal(cardModal);
}

function showImageModal(e) {
    const cardModal = document.querySelector(".popup_type_image");

    cardModal.querySelector('.popup__caption').textContent = e.target.alt;
    cardModal.querySelector('.popup__image').src = e.target.src;
    cardModal.querySelector('.popup__image').alt = e.target.alt;

    openModal(cardModal);
}


function addCardHandler(e) {
    e.preventDefault();

    const form = document.forms['new-place'];
    const card = {
        name: form.elements['place-name'].value,
        link: form.elements['link'].value
    }

    placesList.append(createCard(card));

    closeModal(e.target.parentElement.parentElement);
}

function editProfileHandler(e) {
    e.preventDefault();

    const form = document.forms['edit-profile'];

    changeProfile(form.elements.name.value, form.elements.description.value);

    closeModal(e.target.parentElement.parentElement);
}

function changeProfile(name, description) {
    document.querySelector('.profile__title').textContent = name;
    document.querySelector('.profile__description').textContent = description;
}


