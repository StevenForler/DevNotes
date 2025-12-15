import PropsPractice1 from "./components/propsPractice1"
import PropsPractice2 from "./components/propsPractice2";
import PropsPractice3 from "./components/propsPractice3";

export default function App() {

const info = [

        { id:0, text: "Button #1", color: "bg-red-500", content:["link 1","link 2","link 3"]},
        { id:1, text: "Button #2", color: "bg-cyan-600", content:["link 4","link 5","link 6"]},
        { id:2, text: "Button #3", color: "bg-zinc-100", content:["link 7","link 8","link 9"]},
];

return (// get background color to stretch full view height of screen
        <div className="flex flex-col gap-5 justify-center items-center h-screen w-full bg-pink-300">
                <PropsPractice2 />
                <PropsPractice3 />
        {info.map(button => ( 
                <PropsPractice1 
                buttonPackage={button}/>
                ))}
        </div>
        )
}