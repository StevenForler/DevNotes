import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotesPage } from './Pages/NotesPage'
import { NoteDetailPage } from './Pages/NoteDetailPage.Jsx'
import { NotFoundPage } from './Pages/NotFoundPage'

export const ReactRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/"> <NotesPage/> </Route>
                <Route path="/notes/:noteId"> <NoteDetailPage/> </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Routes>
        </Router>
    )
}