import LinkCard from "../components/linkCard"
import TitleCard from "../components/titleCard"

// code reference https://dailyreactuis.vercel.app/templates/linktree
// video for code reference. https://www.youtube.com/watch?v=mFTp7xsjbpQ
// how do props work sending info from parent to child component https://youtu.be/iKpkVKubvKk?t=3382 56:20

//do it all in app.jsx to start then work on making sections into components

function App() {
  const info = [
        {
            color: "bg-red-500",
            text: "Resources"
        },
        {
            color: "bg-cyan-600",
            text: "Pokemon inspired games"
        },
        {
            color: "bg-zinc-100",
            text: "Romhacks"
        },
    ]


  return (
    <div className="w-full h-screen bg-yellow-300">
    <TitleCard/>
    <LinkCard buttonInfo={info}/>
    </div>
  )
}

export default App
