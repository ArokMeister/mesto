const obj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const checkInputValid = (obj, input) => {
  const { errorClass, inputErrorClass } = obj;
  const error = document.querySelector(`#${input.id}-error`);
  if (input.validity.valid) {
    error.textContent = '';
    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
  } else {
    error.textContent = input.validationMessage;
    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
  }
};

const toggleButtonIsValid = (obj, inputs, button) => {
  const { inactiveButtonClass } = obj;
  const isValid = inputs.every(input => input.validity.valid); // короткая запись возврата (вместо {return input.validity.valid})
  if (isValid) {
    button.classList.remove(inactiveButtonClass);
    button.disabled = '';
  } else {
    button.classList.add(inactiveButtonClass);
    button.disabled = 'disabled';
  }
};

const enableValidation = (obj) => {
  const { formSelector, inputSelector, submitButtonSelector, ...rest } = obj;
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach(form => {
    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkInputValid(rest, input)
        toggleButtonIsValid(rest, inputs, button)
      })
    })
  })
};

enableValidation(obj);

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });