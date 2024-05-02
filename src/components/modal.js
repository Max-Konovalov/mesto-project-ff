export { openModal, closeModal }

const escKeyDownHandler =  (event, domElement) => {
    if (event.keyCode === 27) closeModal(domElement);
};

const handleKeyDown = (event) => escKeyDownHandler(event, domElement);

const clickOutOfPopupHandler = (event, domElement) => {
    if (event.target === domElement) closeModal(domElement);
}

const closeButtonClickHandler = (closeButton, domElement) => {
    closeButton.removeEventListener("click",  closeButtonClickHandler);
    closeModal(domElement);

}

function openModal(domElement) {
    // const closeButton = domElement.querySelector(".popup__close");

    domElement.classList.toggle("popup_is-opened");

    document.addEventListener('keydown', handleKeyDown );
    // closeButton.addEventListener("click",  closeButtonClickHandler(closeButton, domElement));
    // domElement.addEventListener('click', (event) => clickOutOfPopupHandler(event, domElement));
}

function closeModal(domElement) {
    domElement.classList.toggle("popup_is-opened");
    document.removeListener('keydown', handleKeyDown );
    // closeButton.removeEventListener('click', closeModal);

}