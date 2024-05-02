export { openModal, closeModal }


function openModal(domElement) {
    const closeButton = domElement.querySelector(".popup__close");

    domElement.classList.toggle("popup_is-opened");

    // document.addEventListener('keydown', handleKeyDown );
    closeButton.addEventListener("click", () => closeButtonClickHandler(closeButton, domElement));
    // domElement.addEventListener('click', (event) => clickOutOfPopupHandler(event, domElement));
}

function closeModal(domElement) {
    domElement.classList.toggle("popup_is-opened");
    // document.removeListener('keydown', handleKeyDown );
    // closeButton.removeEventListener('click', closeModal);

}