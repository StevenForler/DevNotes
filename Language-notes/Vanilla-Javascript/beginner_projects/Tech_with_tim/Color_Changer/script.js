const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name; //name is represeting the name of the color we want to set the background to
}

function randomColor() {
    const red = Math.round(Math.random() * 255) // the random function will pick a number between 0-1 so it will be grabbing a decimal and it can get big. So we are using the round function to round it up.
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}

//setColor("green") if you want to call a function you take its name and pass the argument (in this case the name of the color) through it and once it runs it grabs the color you desire.
//setColor("red") Javascript will call the function as many as there are calls written for said function. with our current example it will run both green and red very quickly and stop on the last color called.
//what onclick will do is call a JS function when the button is clicked. there will be an example of it on line 12 of index.html. since onlick requires quotation marks to grab the function be sure inside the function call to use apostrophes instead so that you systems doesn't read them the wrong way

