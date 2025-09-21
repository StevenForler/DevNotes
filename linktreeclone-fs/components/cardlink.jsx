export function Cardlink({link}){
    return(
        <div className="bg-white flex items-center mx-4 max-w-md w-full
                        rounded-full p-4 shadow-lg shadow-red-500">
            {link.icon}
            <p>{link.text}</p>
        </div>
    )
}