const cardsBlock = document.querySelector('.cards');

// Разметка скрытого заголовка страницы
const getTitleString = () => {
    return `<h2 class="visually-hidden">Каталог моделей одежды</h2>`.trim();
};

// Разметка кнопки "Загрузить ещё"
const getPageTitleString = () => {
    return `<div class="cards__more more">
        <a class="button button--bordered more__link" href="#">Загрузить ещё</a>
    </div>`.trim();
};

// Преобразует строку в элемент
const stringToHTML = (str) => {
    const template = document.createElement('template');
    template.innerHTML = str;
    return template.content.firstChild;
};

// Рендерит одну карточку
const renderCard = ({id, title, price, img}) => {
    const card =
        `<article class="card" id=${id}>
            <h3 class="card__title">${title}</h3>
            <div class="card__img-wrap">
                <img class="img card__img" src="img/${img}" width="320" height="408" alt="${title}">
            </div>
            <p class="card__price">${price} ₽</p>
            <button class="button button--icon article__button" type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9999 22L11.5499 20.7052C6.39988 16.1243 2.99988 13.103 2.99988 9.3951C2.99988 6.37385 5.41988 4.00001 8.49988 4.00001C10.2399 4.00001 11.9099 4.79456 12.9999 6.05014C14.0899 4.79456 15.7599 4.00001 17.4999 4.00001C20.5799 4.00001 22.9999 6.37385 22.9999 9.3951C22.9999 13.103 19.5999 16.1243 14.4499 20.715L12.9999 22Z" stroke="#211E1D" stroke-linecap="square"/>
                </svg>
                <span class="visually-hidden">Добавить в избранное</span>
            </button>    
        </article>`.trim();
    return card;
};

// Рендерит список карточек
const renderCards = (dataArray = []) => {
    if (dataArray.length !== 0) {
        // Рендерит список карточек
        dataArray.forEach((dataObj) => {
            const card = stringToHTML(renderCard(dataObj));
            cardsBlock.appendChild(card);
        });
    } 
};

// Стартовая функция
const start = () => {
    cardsBlock.innerHTML = ``;
    // Рендерит заголовок
    const pageTitle = stringToHTML(getTitleString());
    cardsBlock.appendChild(pageTitle);
    // Рендерит карточки
    renderCards(data);
    // Рендерит кнопку More
    const moreButton = stringToHTML(getPageTitleString());
    cardsBlock.appendChild(moreButton);
};

start();
