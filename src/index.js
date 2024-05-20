import './pages/index.css';
import {createCard, onLike, onDeleteCard} from "./components/card";
import { openModal, closeModal, setCloseModalByClickListeners } from "./components/modal";
import {clearValidation, enableValidation} from "./components/validation";
import {getMe, getCards, likeCard, deleteCard, addCard, updateUserPhoto, updateProfile } from './components/api';

//Контейнер таблицы карточек
const cardsContainer = document.querySelector('.places__list');
//Кнопки открытия попапов
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
//Попапы
const cardModal = document.querySelector(".popup_type_new-card");
const profileModal = document.querySelector(".popup_type_edit");
const imageModal = document.querySelector(".popup_type_image");
const deleteModal = document.querySelector(".delete__popup");

const popupSubmitButton = document.querySelector('.popup__button');
//Поля профиля
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');
//Поля введения данных для добавления каритинки
const popupCaption = imageModal.querySelector('.popup__caption');
const popupImage = imageModal.querySelector('.popup__image');
//Список попапов
const popupList = [cardModal, profileModal, imageModal, deleteModal];

export const localData = {
    userId: "",
    userPhoto: ""
};

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
};

const updateProfileView = (me) => {
    profileName.textContent = me.name;
    profileDescription.textContent = me.about;

    profileImage.setAttribute("style", `background-image: url(${me.avatar}`);

}

function initPage() {
    Promise.all([getMe() ,getCards()])
        .then( ([me, cards]) => {

            localData.userId = me._id;
            localData.userPhoto = me.avatar;

            renderCards(cards);
            updateProfileView(me);

        });
}

function renderCards(cards) {
    cards.forEach( x => {
        cardsContainer.appendChild(createCard(x, onDeleteCard, onLike, openImagePopup));
    })
}



export const openImagePopup = (evt) => {
    popupCaption.textContent = evt.target.alt;
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;

    openModal(imageModal);
}

const handleAddCardFormSubmit = (e) => {
    e.preventDefault();

    const form = document.forms['new-place'];

    const card = {
        name: form.elements['place-name'].value,
        link: form.elements['link'].value,
        owner: localData.userId
    }
    addCard(card);
    cardsContainer.prepend(createCard(card, onDeleteCard, onLike, openImagePopup));
    form.reset()
    closeModal(cardModal);
}

const openProfileEditForm = () => {
    document.forms['edit-profile'].name.value = profileName.textContent;
    document.forms['edit-profile'].description.value = profileDescription.textContent;
    clearValidation(profileModal, validationConfig);
    openModal(profileModal);
}

const changeProfile = (name, description) => {
    popupSubmitButton.textContent = 'Сохранение...';

    updateProfile(name, description)
        .then( (res) =>
            {
            profileName.textContent = name;
            profileDescription.textContent = description;
            }
        ).catch( (err) => console.log(err)
        ).finally( () => {
            popupSubmitButton.textContent = 'Сохранить';
            }
        );

}

const handleEditProfileFormSubmit = (e) => {
    e.preventDefault();

    const form = document.forms['edit-profile'];

    changeProfile(form.elements.name.value, form.elements.description.value);
    closeModal(profileModal);
}


setCloseModalByClickListeners(popupList);
initPage();

profileEditButton.addEventListener("click", openProfileEditForm);
cardAddButton.addEventListener("click", () => {
    clearValidation(cardModal, validationConfig);
    openModal(cardModal)
});

//обработка submit
cardModal.addEventListener("submit", handleAddCardFormSubmit);
profileModal.addEventListener("submit", handleEditProfileFormSubmit);

//Добавление валиадции форм
enableValidation(validationConfig);


