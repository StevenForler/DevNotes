import {useState } from 'react'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="w-full h-full absolute bg-linear-to-tr
      from-blue-400 to bg-emerald-400">
        <header className=" flex justify-between items-center text-black py-6 px-8
        md:px-32 bg-white drop-shadow-md">
          <a href="#"> 
            <img src="https://placehold.co/600x150" alt="" className="w-52 hover:scale-105 transition-all"></img> 
          </a>
          {/* navbar options */}
          <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Home</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Products</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Explore</li>
            <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">Contact</li>
          </ul>

          {/* search box */}
          <div className="relative hidden md:flex items-center justify-center gap-3">
            <i className=" bx bx-search absolute left-3 text-2xl text-gray-500"></i>
            <input type="text" placeholder="Search..." className="py-2 pl-10 rounded-xl border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500" />
          </div>
            
            {/*menu icon: the span wrap is to override the default stylings of of any pre made icons "bx bx-menu" by default is block in line */} 
          <span className='xl:hidden' ><i className=" block text-5xl cursor-pointer bx-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen) }></i></span> 
            
            {/* smaller resolution menu */}
          <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col 
            items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
            
            style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Products</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Explore</li>
            <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Contact</li>
          </div>
        </header>
        
      </div>
    </>
  )
}

export default App

//https://www.youtube.com/watch?v=qUV2kgYdr9k - following this video for navbar
