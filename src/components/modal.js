export { openModal, closeModal }

function openModal(domElement) {
    domElement.classList.toggle("popup_is-opened");
}

function closeModal(domElement) {
    domElement.classList.toggle("popup_is-opened");
}