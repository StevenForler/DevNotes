Chatgpt confirmed my thoughts on how to produce a drop down for each button using the map method

I don't think I'll need all of this but I copied it in case I might miss something

again AI is 99% bad at getting this information correct. So even though this looks like it makes sense
it may not work and hopefully this gives me the bridging point I need to actually help find my answer



```js
data structure for map method
const info =
[
  { title: "Button 1", content: ["a", "b", "c"] },
  { title: "Button 2", content: ["x", "y"] },
  { title: "Button 3", content: ["hello", "world"] }
]
```
```js
data structure for map method example

const dropdownData = [
  {
    title: "About Dogs",
    items: [
      "Dogs are loyal",
      "Dogs love humans",
      "Dogs need exercise"
    ]
  },
  {
    title: "About Cats",
    items: [
      "Cats are curious",
      "Cats love to climb",
      "Cats sleep a lot"
    ]
  },
  {
    title: "About Birds",
    items: [
      "Birds can fly",
      "Birds sing songs",
      "Birds build nests"
    ]
  }
];
```
```js
Dropdown component

import React, { useState } from "react";

function DropdownBox({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* The button */}
      <button onClick={() => setOpen(!open)}>
        {open ? "Hide" : "Show"} {title}
      </button>

      {/* The dropdown content */}
      {open && (
        <div
          style={{
            padding: "10px",
            border: "1px solid gray",
            marginTop: "5px",
          }}
        >
          <ul>
            {items.map((item, i) => (
              <li key={i}>{item}</li>  // map for dropdown items
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownBox;
```
```js
render page 
import React from "react";
import DropdownBox from "./DropdownBox";

function App() {
  const dropdownData = [
    {
      title: "About Dogs",
      items: [
        "Dogs are loyal",
        "Dogs love humans",
        "Dogs need exercise"
      ]
    },
    {
      title: "About Cats",
      items: [
        "Cats are curious",
        "Cats love to climb",
        "Cats sleep a lot"
      ]
    },
    {
      title: "About Birds",
      items: [
        "Birds can fly",
        "Birds sing songs",
        "Birds build nests"
      ]
    }
  ];

  return (
    <div>
      <h1>Animals Dropdowns</h1>

      {dropdownData.map((data, index) => (
        <DropdownBox
          key={index}
          title={data.title}
          items={data.items}  // pass list of unique items
        />
      ))}
    </div>
  );
}

export default App;
```
