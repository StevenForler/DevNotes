const openModalBtnElement = document.querySelector('#openModal') // is a hash required for JS to grab the ID from HTML?
const modalElement = document.querySelector('.modal') // is reusing the . the same way CSS does to grab a class normal practice?
const modalContentElement = modalElement.querySelector('.modalContent') // separate parts of your document structure if you need to select a button on its own

openModalBtnElement.addEventListener('click', () => {
    modalElement.classList.add('open');
});

modalContentElement.addEventListener('click', () => {
    modalElement.classList.remove('open');
});