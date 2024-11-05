const newColorBtnElement = document.getElementById("new-color-button")
const currentColorElement = document.getElementById("current-color")

const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //fuck doing it this way. find a better way to do this in the future.

function getRandomHexValue() {
    const randomIndexPosition = Math.floor(
        Math.random() * hexValues.length
    );
}