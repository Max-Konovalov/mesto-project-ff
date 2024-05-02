export { openModal, closeModal }

const handleCloseButton = (e) => {
    if (e.target.classList.contains('popup__close')) {
        closeModal(document.querySelector('.popup_is-opened'));
    }
};

const handleOuterClick = (event) => {
    const popup = document.querySelector('.popup_is-opened');
    if (event.target === popup) closeModal(popup);
};

const handleEscKeyDown = (e) => {
    if (e.key === "Escape") {
        const openedModal = document.querySelector('.popup_is-opened');
        if (openedModal) {
            closeModal(openedModal);
        }
    }
}

function openModal(domElement) {
    domElement.classList.toggle("popup_is-opened");
    domElement.addEventListener('click', handleCloseButton);
    domElement.addEventListener('click', handleOuterClick);
    document.addEventListener('keydown', handleEscKeyDown);
}

function closeModal(domElement) {
    domElement.classList.toggle("popup_is-opened");
    domElement.removeEventListener('click', handleCloseButton);
    domElement.removeEventListener('click', handleOuterClick);
    document.removeEventListener('keydown', handleEscKeyDown);
}


