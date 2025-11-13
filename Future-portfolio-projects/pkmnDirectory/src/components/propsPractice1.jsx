
export default function PropsPractice1({cardInfo}) {

    return (
        <div className="flex flex-col gap-10">
            {cardInfo.map(({id, text, color}) => (
            <div key={id} className={`mx-auto border-black border-2 ${color} font-bold text-center w-80 shadow-meow sm:w-96 hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}>
                {text}
            </div>
            ))}
        </div>
    )
}


