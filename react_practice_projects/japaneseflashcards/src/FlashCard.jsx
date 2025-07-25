import react, { useState } from 'react';

function FlashCard (){

    const [glyph, setGlyph] = useState(["A", "B", "C", "D", "E"]);

    function handleAddGlyph (){
        document.getElementById
    }
    
    
    const questions = ["A", "B", "C", "D", "E"]

    const answers = ["1", "2", "3", "4", "5"]
    


    return(
     <>
        <div>
            <h1> What's this character?</h1>
            <button>New character</button>
            <button>Answer Reveal</button>
        </div>
     </>   
    )
}

export default FlashCard

// https://www.smashingmagazine.com/2024/08/generating-unique-random-numbers-javascript-using-sets/ - random number generator for some reference(Vanilla JS)

