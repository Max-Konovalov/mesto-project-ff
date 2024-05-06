import './pages/index.css';
import {createCard} from "./components/card";
import { openModal, closeModal } from "./components/modal";
import {initialCards} from "./components/cards";

const cardsContainer = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const cardModal = document.querySelector(".popup_type_new-card");
const profileModal = document.querySelector(".popup_type_edit");
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function renderCards(cards) {
    cards.forEach( x => {
        cardsContainer.appendChild(createCard(x));
    })
}

renderCards(initialCards);

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

    cardsContainer.prepend(createCard(card));
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

