//Показывает и скрывает ошибку
const toggleError = (obj, input) => {
  const { errorClass } = obj;
  error = document.querySelector(`#${input.id}-error`);
  if (input.validity.valid) {
    error.textContent = '';
    error.classList.remove(errorClass);
  } else {
    error.textContent = input.validationMessage;
    error.classList.add(errorClass);
  }
};

//Подсветка не валидности инпутов
const checkInputValid = (obj, input) => {
  const { inputErrorClass } = obj;
  if (input.validity.valid) {
    input.classList.remove(inputErrorClass);
  } else {
    input.classList.add(inputErrorClass);
  }
};

//Переключение стиля и работы кнопки
const toggleButtonIsValid = (obj, inputs, button) => {
  const { inactiveButtonClass } = obj;
  const isValid = inputs.every(input => input.validity.valid); // короткая запись возврата (вместо {return input.validity.valid})
  if (isValid) {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  }
};

//Функция запуска валидации
const enableValidation = (obj) => {
  const { formSelector, inputSelector, submitButtonSelector, ...rest } = obj;
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach(form => {
    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkInputValid(rest, input);
        toggleError(rest, input);
        toggleButtonIsValid(rest, inputs, button);
      })
    })
  })
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});