const popupElement = document.querySelector('.popup'); //Ищем попап в разметке
const popupCloseBtnElement = popupElement.querySelector('.popup__close-btn'); //Ищем кнопку закрытия попапа в блоке popup
const popupOpenBtnElement = document.querySelector('.profile__edit-btn'); // Ищем кнопку открытия попапа
const nameProfileElement = document.querySelector('.profile__name'); //Ищем строку с именем профиля
const professionProfileElement = document.querySelector('.profile__profession'); //Ищем строку с профессией профиля
const formElement = popupElement.querySelector('.popup__form'); //Ищем форму в блоке popup
const nameInput = formElement.querySelector('#name'); //Ищем инпут для имени в форме
const jobInput = formElement.querySelector('#job'); //Ищем инпут для профессии в форме

const openPopup = function() {
  popupElement.classList.add('popup_opened');
  rename();
} //Добавляем класс для попапа, чтобы он открывался и вносим имя и професиию профиля в инпуты

const closePopup = function() {
  popupElement.classList.remove('popup_opened');
} //Удаляем класс для попапа, чтобы он закрывался

function rename() {
  nameInput.value = nameProfileElement.textContent;
  jobInput.value = professionProfileElement.textContent;
} //Функция, которая позволяет инпутам в форме попапа, принять текстовые значения из блока профиля для имени и професии

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameProfileElement.textContent = nameInput.value;
  professionProfileElement.textContent = jobInput.value;
  closePopup();
} //Функция, которая вносит изменения в имя и профессию в блоке профиля, записывая данные которые вписываются в инпуты в попапе

popupOpenBtnElement.addEventListener('click', openPopup); //Слушатель, который запускает функцию открытия попапа по клику
popupCloseBtnElement.addEventListener('click', closePopup); //Слушатель, который запускает функцию закрытия попапа по клику
formElement.addEventListener('submit', formSubmitHandler); //Слушатель, который ждет когда в форме попапа (formElement) произойдет событие submit
                                                          //и после чего запустит функцию, которая сохранит новые записи в инпутах формы в попапе и закроет окно попапа