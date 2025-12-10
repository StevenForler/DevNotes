import Test from "./components/test.jsx";

function App() {

const info = [
  {id:0, text1:"hello", text2:"goodbye", text3:"greetings", text4:"fairwell"},
];

  return (
    <div className="page-container">
      <h1>sanity tag</h1>
      <Test buttonInfo={info}/>
    </div>
  )
}

export default App