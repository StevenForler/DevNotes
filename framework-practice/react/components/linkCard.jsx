// Goal: make one linkCard and find a way of destructuring it so that is can be used as an attribute to apply to the text each time.
// look into map method and refer back to todo list from Smoljames as he might talk about it in that video


export default function LinkCard(){
    return(
        <div className="max-w-xs mx-auto flex flex-col items-center gap-10">
            <div className="w-80 text-center border-2 border-black"> Button text goes here </div>
        </div>
    )
}