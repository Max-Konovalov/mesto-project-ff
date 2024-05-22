import './pages/index.css';
import {createCard, onLike, onDeleteCard} from "./components/card";
import { openModal, closeModal, setCloseModalByClickListeners } from "./components/modal";
import {clearValidation, enableValidation} from "./components/validation";
import {getMe, getCards, addCard} from './components/api';
import {
    validationConfig,
    cardsContainer,
    profileEditButton,
    cardAddButton,
    profileImageEditButton,
    popupCaption,
    popupImage,
    popupList,
    cardModal,
    imageModal,
    profileImageModal,
    placesForm,
    profileForm,
    avatarUpdateForm
} from "./components/utils/constants";
import { handleEditProfileFormSubmit, handleEditProfileImageFormSubmit, openProfileEditForm, updateProfileView } from "./components/profile";

export const localData = {
    userData: {},
    cardsData: []
};
const openImagePopup = (card) => {
    popupCaption.textContent = card.name;
    popupImage.src = card.link;
    popupImage.alt = card.name;

    openModal(imageModal);
}


function renderCards(cards) {
    cards.forEach( x => {
        cardsContainer.appendChild(createCard(x, onDeleteCard, onLike, openImagePopup));
    })
}

function initPage() {
    Promise.all([getMe() ,getCards()])
        .then( ([me, cards]) => {
            localData.userData = me;
            localData.cardsData = cards;

            renderCards(localData.cardsData);
            updateProfileView(me);
        }).catch((err) => console.log(err));
}


const handleAddCardFormSubmit = (e) => {
    e.preventDefault();
    e.submitter.textContent = 'Сохранение...';

    const card = {
        name: placesForm.elements['place-name'].value,
        link: placesForm.elements['link'].value,
        likes: [],
        owner: {
            _id : localData.userData._id
        }
    }

    addCard(card).then( (res) => {
        cardsContainer.prepend(createCard(res, onDeleteCard, onLike, openImagePopup));
        placesForm.reset()
        closeModal(cardModal);
    }).catch((err) => {
        console.log(err);
    }).finally( () => e.submitter.textContent = 'Сохранить');
}

setCloseModalByClickListeners(popupList);
initPage();

profileEditButton.addEventListener("click", openProfileEditForm);
cardAddButton.addEventListener("click", () => {
    clearValidation(placesForm, validationConfig);
    openModal(cardModal)
});
profileImageEditButton.addEventListener("click", () => {
    clearValidation(avatarUpdateForm, validationConfig);
    openModal(profileImageModal)
});

//обработка submit
placesForm.addEventListener("submit", handleAddCardFormSubmit);
profileForm.addEventListener("submit", handleEditProfileFormSubmit);
avatarUpdateForm.addEventListener("submit", handleEditProfileImageFormSubmit);

//Добавление валиадции форм
enableValidation(validationConfig);


