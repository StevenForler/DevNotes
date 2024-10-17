let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
function renderItems () { 
// not efficient but we are starting with clearing the div to start fressh and re-write our items in it
    itemsDiv.innerHTML = null; // removing all the items from itemsDiv

//for vs while loops. For loops are for the determined count of loops. while loops are for undetermined count
// this loop creates pairings that gives an index that corresponds to the index of the item in the itemDiv array. This gives access to both the index and item simultaneously. 
    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")// creating an div element for the DOM
        container.style.marginBottom = "10px" // adding a margin to keep the items clean

        const text = document.createElement("p") //createElement creates an element on the DOM(the website interface)
        text.style.display = "inline" // every element in HTML is either a block or inline element. Block Elements: will create a row for themselves and move any added elements to the next row. Inline Elements: where added elements like a button will stay next to the tag
        text.style.marginRight = "10px"
        text.textContent = item; // both line 15 and 16 creates a paragraph tag

        const button = document.createElement("button")
        button.textContent = "Delete" // this set will help create a button to help delete items no longer needed
        button.onclick = () => removeItem(idx) // the wrapper syntax () => helps prevent a call that is automatically done by the system before we want it to trigger

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container) // Any container created (line 12) gets added to the div as a child
    }
}

function loadItems () {}

function saveitems () {}

function addItem() {
    const value = input.value;

    if (!value) {
        alert("don\'t leave the box empty")
        return
    }

    items.push(value)
    renderItems()
    input.value = ""
}

function removeItem (idx) {
    items.splice(idx, 1)
    renderItems()
}

