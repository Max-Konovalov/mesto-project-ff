//Cards Container
const cardsContainer = document.querySelector('.places__list');
//Popup Open Buttons
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const profileImageEditButton = document.querySelector('.avatar-edit__button');

//Profile
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

//List & Popups
const cardModal = document.querySelector(".popup_type_new-card");
const profileModal = document.querySelector(".popup_type_edit");
const imageModal = document.querySelector(".popup_type_image");
const deleteModal = document.querySelector(".delete__popup");
const profileImageModal = document.querySelector(".popup_type_update_avatar");
const popupList = [cardModal, profileModal, imageModal, deleteModal, profileImageModal];

//Image Popup Inputs
const popupCaption = imageModal.querySelector('.popup__caption');
const popupImage = imageModal.querySelector('.popup__image');

//Forms
const placesForm = document.forms['new-place'];
const profileForm = document.forms['edit-profile'];
const avatarUpdateForm = document.forms['update-avatar'];

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
};

export {
    validationConfig,
    cardsContainer,
    profileEditButton,
    cardAddButton,
    profileImageEditButton,
    popupCaption,
    popupImage,
    popupList,
    profileName,
    profileDescription,
    profileImage,
    cardModal,
    profileModal,
    imageModal,
    deleteModal,
    profileImageModal,
    placesForm,
    profileForm,
    avatarUpdateForm
};