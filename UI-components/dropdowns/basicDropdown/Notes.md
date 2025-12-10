Notes on props. Here's the direct way to send over key value pairs and how to render them

App.jsx
```JSX
import Test from "./components/test.jsx";

function App() {

  return (
    <div className="page-container">
      <h1>sanity tag</h1>
      <Test text="hello" text2="goodbye"/>
    </div>
  )
}
export default App
```

Test.jsx
```JSX
export default function Test(props) {


    return (
        <div>
            <button>{props.text} </button>
            <button>{props.text2} </button>
        </div>
)
}
```


When passing an array as a prop, you can give it a definition this way 

App.jsx
```JSX

import Test from "./components/test.jsx";

function App() {

const info = ["hello","goodbye"];

  return (
    <div className="page-container">
      <h1>sanity tag</h1>
      <Test buttonInfo={info}/>
    </div>
  )
}
export default App
```


Test.jsx
```JSX
export default function Test({buttonInfo}) {
const [text, text2] = buttonInfo

    return (
        <div>
            <button>{text} </button>
            <button>{text2} </button>
        </div>
)
}
```

When wanting to pass an array of Objects you have to consider that if not destructured correctly
This example isn't best practice and you should use map method in this case. However this is purely
trying to pass an array of objects that is definable for React to render. 

App.jsx
```JSX
import Test from "./components/test.jsx";

function App() {

const info = [
  {id:0, text1:"hello", text2:"goodbye"},
  {id:1, text3:"greetings", text4:"fairwell"},
];

  return (
    <div className="page-container">
      <h1>sanity tag</h1>
      <Test buttonInfo={info}/>
    </div>
  )
}

export default App
```

### test.jsx option 1

```JSX
export default function Test({ buttonInfo }) {
  const [{ text1, text2 }, { text3, text4 }] = buttonInfo;

  return (
    <div>
      <button>{text1}</button>
      <button>{text2}</button>
      <button>{text3}</button>
      <button>{text4}</button>
    </div>
  );
}
```

To what I understand. you're telling react in this case:
buttonInfo[0] should give me {text1, text2} and
buttonInfo[1] should give me {text3, text4}.

### test.jsx option 2

you can be more direct and just use buttonInfo[0] and buttonInfo[1]
similar to how you used props in the first example 

```JSX
export default function Test({ buttonInfo }) {
  return (
    <div>
      <button>{buttonInfo[0].text1}</button>
      <button>{buttonInfo[0].text2}</button>
      <button>{buttonInfo[1].text3}</button>
      <button>{buttonInfo[1].text4}</button>
    </div>
  );
}
```

this also applies the same logic if you just had 1 object with the same amount of info

Changing this line from this:
```JSX
const info = [
  {id:0, text1:"hello", text2:"goodbye"},
  {id:1, text3:"greetings", text4:"fairwell"},
];
```

To this:
```JSX
const info = [
  {id:0, text1:"hello", text2:"goodbye", text3:"greetings", text4:"fairwell"},
];
```

you would just change the destructuring to be like this instead.

```JSX
<div>
      <button>{buttonInfo[0].text1}</button>
      <button>{buttonInfo[0].text2}</button>
      <button>{buttonInfo[0].text3}</button>
      <button>{buttonInfo[0].text4}</button>
    </div>
```

and in test.jsx 1. you would only need 1 set of curly brackets as its all under 1 index/id
```JSX
const [{ text1, text2, text3, text4 }] = buttonInfo;
```

Last example of props without using Map method and you have multiple objects you're passing. again not advised as its causing more work in the end.
because you're working with an array of objects, the component you're trying to pass key vaule pairs to
won't know what exact pairs as it will only see the first object
so the cleanest solution would be to render the component 3 different times and give each one the index of each object

```JSX
import Dropdown from './components/dropdown'

function App() {

const BinfoRD = [

  { id:0, text: "Button #1", content:["1","2","3"]},
  { id:1, text: "Button #2", content:["4","5","6"]},
  { id:2, text: "Button #3", content:["7","8","9"]},
];

  return (
    <div className="page-container">
      <h1>Sanity Tag</h1>
      <Dropdown DropdownPackage={BinfoRD[0]}/>
      <Dropdown DropdownPackage={BinfoRD[1]}/>
      <Dropdown DropdownPackage={BinfoRD[2]}/>
    </div>
  )
}
```

dropdown.jsx
```JSX
function Dropdown({ DropdownPackage }) {
  const { id, text, content } = DropdownPackage;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <div ref={dropdownRef} className="dropdown-container">
      <button onClick={() => setIsOpen(prev => !prev)}>
        {text}
      </button>

      {isOpen && (
        <div className="dropdown-info">
          {content.map(item => (
            <div key={item}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
}
```

So this is pretty close to the result of what I'm trying to achieve so its final form is to implement the map method.