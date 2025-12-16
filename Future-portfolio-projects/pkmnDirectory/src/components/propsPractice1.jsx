import {useState} from 'react';

export default function PropsPractice1({buttonPackage}) {
const {id, text, color, content} = buttonPackage

    const [isOpen, setIsOpen] = useState(false)
    
    return (        
        <div className="flex flex-col gap-10">
            
            <div role='button' key={id} onClick={() => setIsOpen((prev) => !prev)} className={`mx-auto border-black border-2 ${color} font-bold text-center w-80 shadow-meow 
                                    sm:w-96 hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}>
                {text}
            </div>
                {isOpen && (
                <div className=''> 
                    {content.map(item => (
                        <a key={item}>{item}</a>
                        ))}
                </div>
                )}
            
        </div>
        
    )
}


