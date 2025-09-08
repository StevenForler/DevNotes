import {Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import {Projects} from './pages/coding-projects'
import {Hobbies} from './pages/hobbies'
import {Twitch} from './pages/twitch'
import {Contact} from './pages/contact'
import { Layout } from './layout'


export function Pageroutes(){

    return (
        <Routes>
            <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/hobbies" element={<Hobbies/>}/>
            <Route path="/twitch" element={<Twitch/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Route>
        </Routes>
    )
}