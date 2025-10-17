import Linktree  from "../components/linkTreeRef"
import PropsPractice1 from "../components/propsPractice1"

function App() {
  
  const links = [
{
	color: "bg-red-500",
	text: "Buy me coffee ☕️",
	link: "https://github.com",
},
{
	color: "bg-blue-600",
	text: "Join My Newsletter 🗞",
	link: "https://github.com",
},
{
	color: "bg-zinc-100",
	text: "Learn Code 💻",
	link: "https://github.com",
},
];

  return (
    <div >
      {links.map(({text,color,link}, index) => {
        return <PropsPractice1 key={index} text={text.text} color={color.color} link={link.link}/>
      })}
    </div>
  )
}

export default App
