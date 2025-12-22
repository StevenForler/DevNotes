import {useState} from 'react';

export default function MainDropdown({buttonPackage}) {
const {id, text, color, content} = buttonPackage

    const [isOpen, setIsOpen] = useState(false)
    
    return (        
        <div className="flex flex-col">
            
            <div role='button' key={id} onClick={() => setIsOpen((prev) => !prev)} 
                                    className={`mx-auto border-black border-2 ${color} font-bold text-center w-40 
                                    shadow-[2px_2px_#32127a] transition-transform hover:-translate-1 active:translate-0.75`}>
                {text}
            </div> 
                {isOpen && (
                <div className='bg-yellow-200 border-black border-2 rounded-b-lg font-bold shadow-[2px_2px_#32127a] flex flex-col '> 
                {content.map(item => (
                        <a className='flex justify-center' href='#' key={item}>{item}</a>
                        ))}
                </div>
                )}
            
        </div>
        
    )
}
// hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 shadow-meow 

{/* <a class="group relative z-10 block w-full -translate-x-0.5 -translate-y-0.5 overflow-hidden border-2 border-neutral-950
bg-white p-4 transition-transform hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0" href="/components/navigation" 
style="clip-path: polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px);">
    <span class="absolute block origin-top-right rotate-45 object-cover 
    z-20 bg-neutral-950" style="right: -2px; top: 10px; width: 16.9706px; height: 2px;">
    </span><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="absolute 
    -right-4 -top-4 z-10 text-7xl text-neutral-200" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
    stroke-linecap="round" stroke-linejoin="round" class="relative z-10 mb-2 text-2xl text-indigo-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        <h3 class="relative z-10 line-clamp-1 text-lg font-medium uppercase text-neutral-950 duration-300 group-hover:text-indigo-600">Navbars &amp; Menus</h3></a> */}