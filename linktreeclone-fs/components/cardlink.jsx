"use client";
export function Cardlink({link}){
    function goTo(goToLink) {
        window.open(goToLink, "_blank")
    }
    return(
        <div onClick={(() => goTo(link.link))} className="bg-white flex items-center mx-4 max-w-md w-full
                        rounded-full p-4 shadow-lg shadow-red-500 cursor-pointer">
            {link.icon}
            <p className="font-bold m-auto">{link.text}</p>
        </div>
    )
}