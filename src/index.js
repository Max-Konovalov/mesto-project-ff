import './pages/index.css';
import {createCard, onLike, onDeleteCard} from "./components/card";
import { openModal, closeModal, setCloseModalByClickListeners } from "./components/modal";
import {clearValidation, enableValidation} from "./components/validation";
import {getMe, getCards, addCard, updateUserPhoto, updateProfile } from './components/api';

//Контейнер таблицы карточек
const cardsContainer = document.querySelector('.places__list');
//Кнопки открытия попапов
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const profileImageEditButton = document.querySelector('.avatar-edit__button');
//Попапы
const cardModal = document.querySelector(".popup_type_new-card");
const profileModal = document.querySelector(".popup_type_edit");
const imageModal = document.querySelector(".popup_type_image");
const deleteModal = document.querySelector(".delete__popup");
const profileImageModal = document.querySelector(".popup_type_update_avatar");

const popupSubmitButton = document.querySelector('.popup__button');
//Поля профиля
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');
//Поля введения данных для добавления каритинки
const popupCaption = imageModal.querySelector('.popup__caption');
const popupImage = imageModal.querySelector('.popup__image');
//Список попапов
const popupList = [cardModal, profileModal, imageModal, deleteModal, profileImageModal];

export const localData = {
    userData: {},
    cardsData: []
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
    profileName.textContent = localData.userData.name;
    profileDescription.textContent = localData.userData.about;

    profileImage.setAttribute("style", `background-image: url(${localData.userData.avatar}`);

}

function initPage() {
    Promise.all([getMe() ,getCards()])
        .then( ([me, cards]) => {

            localData.userData = me;
            localData.cardsData = cards;

            renderCards(localData.cardsData);
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
        likes: [],
        owner: {
            _id : localData.userData._id
        }
    }

    addCard(card).then( (res) => {
        cardsContainer.prepend(createCard(res, onDeleteCard, onLike, openImagePopup));
    });

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

const changeImage = (link) => {
    popupSubmitButton.textContent = 'Сохранение...';
    updateUserPhoto(link)
        .then( (res) => {
            profileImage.setAttribute("style", `background-image: url(${res.avatar}`);
        })
        .catch( (err) => console.log(err)
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

const handleEditProfileImageFormSubmit = (e) => {
    e.preventDefault();

    const form = document.forms['update-avatar'];

    changeImage(form.elements.link.value);
    form.reset()
    closeModal(profileImageModal);
}


setCloseModalByClickListeners(popupList);
initPage();

profileEditButton.addEventListener("click", openProfileEditForm);
cardAddButton.addEventListener("click", () => {
    clearValidation(cardModal, validationConfig);
    openModal(cardModal)
});
profileImageEditButton.addEventListener("click", () => {
    clearValidation(profileImageModal, validationConfig);
    openModal(profileImageModal)
});


//обработка submit
cardModal.addEventListener("submit", handleAddCardFormSubmit);
profileModal.addEventListener("submit", handleEditProfileFormSubmit);
profileImageModal.addEventListener("submit", handleEditProfileImageFormSubmit);

//Добавление валиадции форм
enableValidation(validationConfig);


