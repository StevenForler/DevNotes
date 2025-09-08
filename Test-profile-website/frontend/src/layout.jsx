import { Navbar } from "./components/navbar"
import { Header } from "./components/header"
import { Outlet } from "react-router-dom"

export function Layout(){
    return(
        <>  
            <Header/>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}