import PropsPractice1 from "./components/propsPractice1"
import PropsPractice2 from "./components/propsPractice2";
import PropsPractice3 from "./components/propsPractice3";

export default function App() {

const info = [

        { id:0, text: "Resources", color: "bg-red-500"},
        { id:1, text: "PKMN-inspired games", color: "bg-cyan-600"},
        { id:2, text: "Romhacks", color: "bg-zinc-100"},
];

return (// get background color to stretch full view height of screen
        <div className="flex flex-col gap-5 justify-center items-center h-screen w-full bg-pink-300"> 
                <PropsPractice2 />
                <PropsPractice3 />
                <PropsPractice1 cardInfo={info}/>
        </div>
        )
}