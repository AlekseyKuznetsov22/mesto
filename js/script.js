const popup = document.querySelector('.popup'); //вызов popup
const buttonedit = document.querySelector('.profile__edit-button'); //кнопка редактировать
const buttonclose = document.querySelector('.popup__button-close');  //кнопка закрыть
const formElement = document.querySelector('.popup__container'); //форма
const nameInput = document.querySelector('.popup__field_name'); //ввод имени
const jobInput = document.querySelector('.popup__field_text'); //ввод информации
const profileTitle = document.querySelector('.profile__title'); // заголовок профиля
const profileSubtitle = document.querySelector('.profile__subtitle'); // подзаголовок профиля



function openForm() {  //открыть попап
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent                     
    jobInput.value = profileSubtitle.textContent
}


function closeForm() {   //закрыть попап
    popup.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {   //форма отправки
    evt.preventDefault();
    profileTitle.textContent =  nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closeForm(); 
}

buttonedit.addEventListener('click', openForm);
buttonclose.addEventListener('click', closeForm);             //вызовы функций
formElement.addEventListener('submit', formSubmitHandler);


