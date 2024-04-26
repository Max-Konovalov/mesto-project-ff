export { openModal, closeModal }

function closeModal(domElement) {
    domElement.classList.toggle("popup_is-opened");
    // document.removeEventListener('keydown', escKeyDownHandler);
}

function openModal(domElement) {
    const closeButton = domElement.querySelector(".popup__close");

    domElement.classList.toggle("popup_is-opened");

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) closeModal(domElement);
    });

    // escKeyDownHandler(event, domElement
    closeButton.addEventListener("click", function () {
        closeModal(domElement)
    });
}
//
// function escKeyDownHandler(event) {
//     if (event.keyCode === 27) closeModal(domElement);
// }
