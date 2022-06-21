const button = document.querySelector('.addElement');
const list = document.querySelector('.listFlex');

button.addEventListener('click', () => {
    const element = document.createElement('li');
    element.textContent = 'element';
    element.classList.add('element');
    list.appendChild(element);
});