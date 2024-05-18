export { openModal, closeModal, setCloseModalByClickListeners }
import {enableValidation} from "./validation";

const handleEscKeyDown = (e) => {
    if (e.key === "Escape") {
        const openedModal = document.querySelector('.popup_is-opened');
        if (openedModal) {
            closeModal(openedModal);
        }
    }
}

const openModal = (domElement) => {
    domElement.classList.toggle("popup_is-opened");
    document.addEventListener('keydown', handleEscKeyDown);
}

const closeModal = (domElement) => {
    domElement.classList.toggle("popup_is-opened");
    document.removeEventListener('keydown', handleEscKeyDown);
}

const setCloseModalByClickListeners = (popupList) => {
    popupList.forEach(popup => {
        // находим кнопку закрытия попапа
        const closeButton = popup.querySelector('.popup__close');

        // вешаем обработчик закрытия на кнопку
        closeButton.addEventListener('click', () => closeModal(popup))

        // вешаем обработчик закрытия на оверлей
        popup.addEventListener('click', (e) => {if (e.target === popup) closeModal(popup)})
    })
}