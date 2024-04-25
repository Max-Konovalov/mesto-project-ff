export { openModal }


function openModal(domElement) {
    console.log(1 + " " +domElement);
    const closeButton = domElement.querySelector(".popup__close");
    domElement.classList.toggle("popup_is-opened");


    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) closeModal(domElement);
    });

    closeButton.addEventListener("click", function () {
        closeModal(domElement)
    });
}

function closeModal(domElement, keydownHandler) {
    console.log("2 " + domElement)
    domElement.classList.toggle("popup_is-opened");
    // document.removeEventListener('keydown', );
}
