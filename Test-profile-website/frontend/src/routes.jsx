import { Route, hashRouter as Router, Routes } from 'react-router-dom'
import {Summary} from './pages/summary.jsx'


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