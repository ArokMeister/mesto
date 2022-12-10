const validationObj = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}



// enableValidation(validationObj)

// function enableValidation({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) {
//   const forms = [...document.querySelectorAll(formSelector)];
//   forms.forEach(form => {
//     form.addEventListener('submit', evt => evt.preventDefault());

//     const inputs = form.querySelectorAll(inputSelector);
//     inputs.forEach(input => {
//       input.addEventListener('input', evt => {

//       })
//     })
//   })
// };

// function setSubmitButtonState(isFormValid) {
//   if (isFormValid) {
//     submitButtonSelector.removeAttribute('disabled');
//     submitButtonSelector.remove(inactiveButtonClass);
//   } else {
//     submitButtonSelector.setAttribute('disabled', true);
//     submitButtonSelector.add(inactiveButtonClass);
//   }
// }

// validationObj.formSelector.addEventListener('input', function(evt) {
//   const isValid = inputSelector.value.length > 0 && inputSelector.value.length > 0;
//   setSubmitButtonState(isValid);
// })

function validInputs ({inputSelector}) {
  const inputs = [...document.querySelectorAll(inputSelector)];
  inputs.forEach(input => {
    
  })
}