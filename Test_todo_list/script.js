const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems() {
    const value = localStorage.getItem("todo") || "[]";

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

function updateItem(item, key, value) {
    item[key] = value; // JS objects are passed by reference so updating the item here should update the same object

    setItems(items);
    refreshList();
}

function refreshList() {
    // TODO item sort that handles alphabet org and if its checked or not.
    // items.sort((a,b) => {
    //     if (a.completed) {
    //         return 1;
    //     }

    //     if (b.completed) {
    //         return -1;
    //     }

    //     return a.description < b.description ? -1 : 1;
    // })

    ITEMS_CONTAINER.innerHTML = "";

    for (const item of items) {
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true); // were taking the template element on line 13 of index.html, then were getting the content from that template, then make a clone of that template. now we can interact with that div using standard DOM methods
        const descriptionInput = itemElement.querySelector(".item-description"); // for every single new item we are cloning that template.
        const completedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value);
        });

        completedInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked);
        });

        ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener ("click", () => {
    addItem();
});

refreshList();
