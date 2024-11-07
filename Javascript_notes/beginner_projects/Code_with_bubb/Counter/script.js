const addBtnElement = document.getElementById('counterAdd');
const subBtnElement = document.getElementById('counterSub');
const counterDisplayElement = document.getElementById('counterDisplay');

let total = 0;
// const limit = 20;

const updateCounterDisplay = () => {
    // if(total > limit) {
    //     total = limit;
    // } //if you want an upper limit

    if(total <0 ) {
        total = 0;
    }

    counterDisplayElement.textContent = total;
    document.body.style.setProperty('background-color', `rgb(${(total/limit) * 255}, 64, 0)`) // this is set to the limit that I have commented out 
}

addBtnElement.addEventListener ('click', () => {
    total += 1;
    updateCounterDisplay();
    
})

subBtnElement.addEventListener ('click', () => {
    total -= 1;
    updateCounterDisplay();
})

updateCounterDisplay(); // this is to initialize the color change on line 18