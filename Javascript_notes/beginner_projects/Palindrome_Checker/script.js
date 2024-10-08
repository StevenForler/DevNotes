const input = document.getElementById("input") // when we have the element it gives us access to the whole box. we can change the styling, clear the box. etc.

function reverseString(str) {

    return str.split("").reverse().join("") // it takes the string and splits it based on the delimeter( which is the value that you put in as the argument in the function) for example by default when using an empty string it just takes each letter separately as an array.

}

function check() {
    const value= input.value;
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("This is a Palindrome!")
    } else {
        alert("no no no, not today!")
    }
    
    input.value = ""
}