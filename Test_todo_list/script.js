const items_container = document.getElementById("items");
const item_template = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo")|| "[]";

    return JSON.parse(value); // to turn the JSON array into a JavaScript array
}

function setItems(items) { // this is for when the user sets or changes an item to keep it and update it as needed
    const itemsJson = JSON.stringify(items) // passing through the items array converting it back to json to be saved as local storage

    localStorage.setItem("todo", itemsJson) // "we're resetting the json back" IDK WHAT THE FUCK HE MEANS BY THIS? i'm assuming he's meaning Re-setting the get items in json to localStorage to store properly
}

function addItem() {
    items.unshift( {//adds items to the beginning of the array
        description: "",
        completed: false
    });

    setItems(items);
    refreshList(); // render the list of items for the user
}

function refreshList() {
    //TODO: sort items

    items_containers.innerHTML = "";

    for (const item of items) {
        const itemElement = item_template.content.cloneNode(true); // were taking the template element on line 13 of index.html, then were getting the content from that template, then make a clone of that template. now we can interact with that div using standard DOM methods
        
    }
}
console.log(items);
// getItems();
