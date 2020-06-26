const popup = document.querySelector('.popup'); //вызов popup
const buttonEdit = document.querySelector('.profile__edit-button'); //кнопка редактировать
const buttonClose = document.querySelector('.popup__button-close');  //кнопка закрыть
const formElement = document.querySelector('.popup__container'); //форма
const nameInput = document.querySelector('.popup__field_name'); //ввод имени
const jobInput = document.querySelector('.popup__field_text'); //ввод информации
const profileTitle = document.querySelector('.profile__title'); // заголовок профиля
const profileSubtitle = document.querySelector('.profile__subtitle'); // подзаголовок профиля

const elements = document.querySelector('.elements'); //находим контейнер для карт 
const closeAdd = document.querySelector('.popup__close-add'); //нашли кнопку закрыть
const addForm = document.querySelector('.popup__addform');      //нашли форму добавления
const buttonAdd = document.querySelector('.profile__add-button');   //кнопка плюс (добавить)
const cardForm = document.querySelector('.popup__container_add');  //форма контейнера
const popupName = document.querySelector('.popup__input_name'); //находим инпут титл в попап
const popupLink = document.querySelector('.popup__input_url');  //нашли инпут URL 

const elementPic = document.querySelector('.popup__img');  //нашли картинку
const cardName = document.querySelector('.popup__name');  //имя картинки
const imagePopup = document.querySelector('.popup__image'); //попуп открытия
const closeButtons = document.querySelector('.popup__close-image'); //кнопка закрыть


//открыть/закрыть попап
function togglePopup(popup) {
    popup.classList.toggle('popup_opened');
}


// попап изменения профиля
function openPopupEdit() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    togglePopup(popup);
}

//форма отправки
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    togglePopup(popup);
}

//массив карточек
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинск',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорск',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


//открываем попап добавления
function openPopupCard() {
    togglePopup(addForm);
}

//функция отображения карточек на странице
function addCard(name, link) {

    const elementTemplate = document.querySelector("#element-template").content; //находим форму
    const card = elementTemplate.cloneNode(true);      //копируем форму
    const cardElement = card.querySelector('.elements__item');

    cardElement.src = link;
    cardElement.alt = name;

    card.querySelector('.elements__title').textContent = name; //название с массива
    card.querySelector('.elements__button-like').addEventListener('click', cardsLike); //нашли кнопку лайк
    cardElement.addEventListener('click', cardsImage);      //увеличение картинок
    card.querySelector('.elements__remove').addEventListener('click', cardDelete); //удаление карточек

    return (card);
}


//добавили карточки в разметку
function cardCopy(card) {
    elements.prepend(card);
}


//увеличение карточек
function cardsImage(evt) {
    elementPic.src = evt.target.src;
    elementPic.alt = evt.target.alt;
    cardName.textContent = evt.target.alt;
    togglePopup(imagePopup);
}


function prependCard(name, link) {
    elements.prepend(addCard(name, link));
}


function loadCard() {
    initialCards.forEach((item) => {
        prependCard(item.name, item.link);
    });
}


//функция отправки формы
function changeElementsCard(evt) {
    evt.preventDefault();
    addCard(popupName.value, popupLink.value);

    togglePopup(addForm);
}


//функция удаления карточек
function cardDelete(evt) {
    evt.target.closest('.elements__rentangle').remove();
}

//функция постановки лайка
function cardsLike(evt) {
    evt.target.classList.toggle('elements__button-like_active');
}

loadCard();

buttonClose.addEventListener('click', () => togglePopup(popup));
buttonEdit.addEventListener('click', openPopupEdit);
formElement.addEventListener('submit', formSubmitHandler);
buttonAdd.addEventListener('click', openPopupCard);
cardForm.addEventListener('submit', changeElementsCard);
closeAdd.addEventListener('click', () => togglePopup(addForm));
closeButtons.addEventListener('click', () => togglePopup(imagePopup));



