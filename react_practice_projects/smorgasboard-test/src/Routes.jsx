import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NotesPage } from './Pages/NotesPage'
import { NoteDetailPage } from './Pages/NoteDetailPage.Jsx'
import { NotFoundPage } from './Pages/NotFoundPage'

export const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path="/"> <NotesPage/> </Route>
                <Route path="/notes/:noteId"> <NoteDetailPage/> </Route>
                <Route> <NotFoundPage/></Route>
            </Switch>
        </Router>
    );
}