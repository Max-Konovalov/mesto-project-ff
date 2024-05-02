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
const cardAddButton = document.querySelector('.profile__add-button');
const cardModal = document.querySelector(".popup_type_new-card");
const profileModal = document.querySelector(".popup_type_edit");
const imageModal = document.querySelector(".popup_type_image");

const changeProfile = (name, description, form) => {
    document.querySelector('.profile__title').textContent = name;
    document.querySelector('.profile__description').textContent = description;
}

const addCardHandler = (e) => {
    e.preventDefault();

    const form = document.forms['new-place'];
    form.reset;

    const card = {
        name: form.elements['place-name'].value,
        link: form.elements['link'].value
    }

    placesList.prepend(createCard(card));

    closeModal(e.target.parentElement.parentElement);
}

const editProfileHandler = (e) => {
    console.log(e);
    e.preventDefault();

    const form = document.forms['edit-profile'];

    changeProfile(form.elements.name.value, form.elements.description.value);
    closeModal(e.target.parentElement.parentElement);
}

profileEditButton.addEventListener("click", () => {
    document.forms['edit-profile'].name.value = document.querySelector(".profile__title").textContent;
    document.forms['edit-profile'].description.value = document.querySelector(".profile__description").textContent;
    openModal(profileModal);

});
cardAddButton.addEventListener("click", () => openModal(cardModal));
placesList.addEventListener("click", function (evt) {
    if (evt.target.classList.contains('card__like-button')) {
        evt.target.classList.toggle("card__like-button_is-active");
    }
});
placesList.addEventListener("click", function (evt) {
    if (evt.target.classList.contains('card__image')) {
        imageModal.querySelector('.popup__caption').textContent = evt.target.alt;
        imageModal.querySelector('.popup__image').src = evt.target.src;
        imageModal.querySelector('.popup__image').alt = evt.target.alt;

        openModal(imageModal);
    }
});

cardModal.addEventListener("submit", addCardHandler);
profileModal.addEventListener("submit", editProfileHandler);






document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        const openedModal = document.querySelector('.popup_is-opened');
        if (openedModal) {
            closeModal(openedModal);
        }
    }
})

// const clickOutOfPopupHandler = (event, domElement) => {
//     if (event.target === domElement) closeModal(domElement);
// }
//
// const closeButtonClickHandler = (closeButton, domElement) => {
//     closeButton.removeEventListener("click",  closeButtonClickHandler);
//     closeModal(domElement);
//
// }