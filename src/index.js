import './pages/index.css';
import showCards from "./components/card";
import { openModal } from "./components/modal";

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





profileEditButton.addEventListener("click", clickHandler);
profileAddButton.addEventListener("click", clickHandler);
placesList.addEventListener("click", clickHandler);

function clickHandler(evt) {
    switch (evt.target.classList.value) {
        case "profile__edit-button":
            openModal(document.querySelector(".popup_type_edit"));
            break;
        case "profile__add-button":
            openModal(document.querySelector(".popup_type_new-card"));
            break;
        case "card__image":
            openModal(document.querySelector(".popup_type_image"));
            break
    }
}

function likeHandler() {

}




// // export { openModal }
//
//
// function openModal(evt) {
//     switch (evt.target.classList.value) {
//         if (evt.target.classList.contains("profile__edit-button") ||
//         evt.target.classList.contains("profile__add-button"):
//
//             break;
//         case "profile__add-button":
//             openModal(".popup_type_new-card");
//             break;
//         default:
//             break;
//
//             evt.target.style.visibility = "visible";
//             // evt.target.style.display = "flex";
//             const closeButton = evt.target.querySelector(".popup__close");
//
//             document.addEventListener('keydown', function (e) {
//                 if (e.keyCode === 27) closeModal(evt);
//                 console.log("asd")
//             });
//
//             closeButton.addEventListener("click", function () {
//                 closeModal(evt)
//             });
//     }
// }
function closeModal (evt, modal) {
    // document.removeEventListener('keydown', function (e) {}
    modal.classList.toggle("popup_is-opened");
}


