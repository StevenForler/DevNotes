const btnElement = document.querySelector('button');
const spanElement = document.querySelector('span');

btnElement.addEventListener('click', () => {
    const yourName = prompt('Please Enter Your Name:')
    spanElement.textContent = yourName;
})