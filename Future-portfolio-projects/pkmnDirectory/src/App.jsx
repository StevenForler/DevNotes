import MainDropdown from "./components/mainDropdown";
import PropsPractice2 from "./components/propsPractice2";
import PropsPractice3 from "./components/propsPractice3";
import { DropdownContent } from "./components/dropdownContent";


export default function App() {

const info = [

        { id:0, text: "Socials", color: "bg-red-500", content: DropdownContent.button1 },
        { id:1, text: "Github Projects", color: "bg-cyan-600", content: DropdownContent.button2},
        { id:2, text: "Contact Me", color: "bg-zinc-100", content: DropdownContent.button3 },
];

return (// get background color to stretch full view height of screen
        <div className="flex flex-col gap-5 justify-center items-center h-screen w-full bg-pink-300">
                <PropsPractice2 />
                <PropsPractice3 />
        {info.map(button => ( 
                <MainDropdown
                buttonPackage={button}/>
                ))}
        </div>
        )
}