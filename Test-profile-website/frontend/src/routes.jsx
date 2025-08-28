import { Route, hashRouter as Router, Routes } from 'react-router-dom'
import { Layout } from './layout'
import { Projects } from './pages/coding-projects'
import { Contact } from './pages/contact'
import { Hobbies } from './pages/hobbies'
import { Stream } from './pages/stream'
import { Summary } from './pages/summary'

export function Pageroutes(){

    return(
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Summary/>}/>
                    <Route path="/???" element={<Projects/>}/>
                    <Route path="/hobbies" element={<Hobbies/>}/>
                    <Route path="/steveticusthethird" element={<Stream/>}/>
                    <Route path="/contact-page" element={<Contact/>}/>
                </Route>
            </Routes>
        </Router>
    )
}