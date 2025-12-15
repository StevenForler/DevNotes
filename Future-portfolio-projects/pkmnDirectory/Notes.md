# Ideas of how to pass large numbers of unique items. (strings, links, etc.)

my understanding is as follows for this first one. you make a component that handles all the content for the dropdown in a different component.
you import it into the App.jsx component and pass it in as a prop. I will look into other methods on what would be better to add a large list of links instead of just as a string that has an href to it.

```JS
export const buttonContent = {
  button1: [
    "https://example.com/link1",
    "https://example.com/link2",
    "https://example.com/link3",
    "https://example.com/link4",
  ],
  button2: [
    "https://example.com/link5",
    "https://example.com/link6",
    "https://example.com/link7",
  ],
  button3: [
    "https://example.com/link8",
    "https://example.com/link9",
  ],
};
```

```JSX
import { buttonContent } from "./data/buttonContent";

const info = [
  {
    id: 0,
    text: "Button #1",
    color: "bg-red-500",
    content: buttonContent.button1,
  },
  {
    id: 1,
    text: "Button #2",
    color: "bg-cyan-600",
    content: buttonContent.button2,
  },
  {
    id: 2,
    text: "Button #3",
    color: "bg-zinc-100",
    content: buttonContent.button3,
  },
];
```