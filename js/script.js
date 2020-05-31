const popup = document.querySelector('.popup'); //вызов popup
const buttonedit = document.querySelector('.profile__edit-button'); //кнопка редактировать
const buttonclose = document.querySelector('.popup__button-close');  //кнопка закрыть
const formElement = document.querySelector('.popup__container'); //форма
const nameInput = document.querySelector('.popup__field_name'); //ввод имени
const jobInput = document.querySelector('.popup__field_text'); //ввод информации
const profileTitle = document.querySelector('.profile__title'); // заголовок профиля
const profileSubtitle = document.querySelector('.profile__subtitle'); // подзаголовок профиля

const elementDel = document.querySelector('.elements__rentangle'); //нашли карточку элемента
const cardDelButton = document.querySelectorAll('.elements__remove'); //находим кнопку удаления(корзина)
const elements = document.querySelector('.elements'); //находим контейнер для карт 
const closeAdd = document.querySelector('.popup__close-add'); //нашли кнопку закрыть
const addForm = document.querySelector('.popup__addform');      //нашли форму добавления
const buttonAdd = document.querySelector('.profile__add-button');   //кнопка плюс (добавить)
const cardForm = document.querySelector('.popup__container_add');  //форма контейнера

const elementPic = document.querySelector('.popup__img');  //нашли картинку
const popupName = document.querySelector('.popup__name');  //имя картинки
const imagePopup = document.querySelector('.popup__image'); //попуп открытия
const closeButtons = document.querySelector('.popup__close-image'); //кнопка закрыть



function openForm() {  //открыть попап
    popup.classList.add('popup_opened');
    nameInput.value = profileTitle.textContent                     
    jobInput.value = profileSubtitle.textContent
}

buttonedit.addEventListener('click', openForm);


function closeForm() {   //закрыть попап
    popup.classList.remove('popup_opened');
}

buttonclose.addEventListener('click', function () {
    closeForm();
});


function formSubmitHandler (evt) {   //форма отправки
    evt.preventDefault();
    profileTitle.textContent =  nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closeForm(); 
}


formElement.addEventListener('submit', formSubmitHandler);


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


                                //открыть попап добавления
function openAdd() {                               
    addForm.classList.add('popup_opened');
}                                                    

buttonAdd.addEventListener('click', openAdd);

                                //закрыть попап добавлн
function closePopup() {
    addForm.classList.remove('popup_opened');
}                                                   

closeAdd.addEventListener('click', function () {
    closePopup();
});


                                     //функция удаления карточек
function deleteCard (event) {                    
    if(event.target.classList.contains('elements__remove')){
      
     event.target.closest('.elements__rentangle').remove();
    }
  }

  elements.addEventListener('click', deleteCard);



                                    //функция отображения карточек на странице
function addCard(name, link) {    

const elements = document.querySelector('.elements'); //находим контейнер для карт 
const elementTemplate = document.querySelector("#element-template").content; //находим форму
const сard = elementTemplate.cloneNode(true);      //копируем форму
const elementImage = сard.querySelector('.elements__item');

сard.querySelector('.elements__item').src = link;   //ссылка с масива
сard.querySelector('.elements__title').textContent = name; //название с массива


                                        //увеличение картинок
elementImage.addEventListener('click', function() {
    imagePopup.classList.toggle('popup_opened');
    elementPic.src = link;
    popupName.textContent = name;
});

closeButtons.addEventListener("click", function() {
    imagePopup.classList.remove('popup_opened');
});


                                    //функция постановки лайка
сard.querySelector('.elements__button-like').addEventListener('click', function (evt) {  
   evt.target.classList.toggle('elements__button-like_active');
 });

cardForm.addEventListener('submit', addNewCard);


elements.append(сard);
}

initialCards.forEach(function (item) {
   addCard(item.name, item.link);
});


                                 //функция добавления новых карточек
function addNewCard (evt) {    
    
    evt.preventDefault();
    const elements = document.querySelector('.elements'); //находим контейнер для карт 
    const elementTemplate = document.querySelector("#element-template").content;
    const сard = elementTemplate.cloneNode(true);  

    const elementImage = сard.querySelector('.elements__item'); //находим поле image
    const elementTitle = сard.querySelector('.elements__title'); //находим поле title
    
    const popupName = document.querySelector('.popup__input_name'); //находим инпут титл в попап
    const popupLink = document.querySelector('.popup__input_url'); //инпут URL попап

    elementImage.src = popupLink.value;
    elementTitle.textContent = popupName.value;

                                    //функция постановки лайка
    сard.querySelector('.elements__button-like').addEventListener('click', function (evt) {  
        evt.target.classList.toggle('elements__button-like_active');
      });

    elements.prepend(сard);
    closePopup();
}

