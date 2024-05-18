export { enableValidation, clearValidation };

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('button_inactive');
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove('button_inactive');
        buttonElement.disabled = false;
    }
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.classList.add('form__input-error_active');
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    const errorMessage = inputElement.dataset.errorMessage;
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(errorMessage);
    } else {
        inputElement.setCustomValidity('');
    }

    if (!inputElement.validity.valid) {

        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

function enableValidation(modal) {
    const formElement = modal.querySelector('.popup__form');
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

const clearValidation = (modal) => {
    const formElement = modal.querySelector('.popup__form');
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });

}
