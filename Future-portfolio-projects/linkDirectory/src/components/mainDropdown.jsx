import {useState} from 'react';

export default function MainDropdown({buttonPackage}) {
const {id, text, color, content} = buttonPackage

    const [isOpen, setIsOpen] = useState(false)
    
    return (        
        <div className="flex flex-col font-mono ">
            
            <div role='button' key={id} onClick={() => setIsOpen((prev) => !prev)} 
                                    className={`mx-auto border-black border-2 ${color} font-bold text-center w-40 
                                    shadow-[2px_2px_#32127a] transition-transform hover:-translate-1 active:translate-0.75`}>
                {text}
            </div> 
                {isOpen && (
                <div className='bg-yellow-200 font-black border-black border-2 rounded-b-lg shadow-[2px_2px_#32127a] flex flex-col '> 
                {content.map(item => (
                        <a className='flex justify-center' href='#' key={item}>{item}</a>
                        ))}
                </div>
                )}
            
        </div>
        
    )
}
// hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 shadow-meow
// src="https://media.tenor.com/fSsxftCb8w0AAAAj/pikachu-running.gif"

