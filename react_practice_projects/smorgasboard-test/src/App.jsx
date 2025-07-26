import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NotesPage } from './Pages/NotesPage'
import { NoteDetailPage } from './Pages/NoteDetailPage.Jsx'
import { NotFoundPage } from './Pages/NotFoundPage'
//import { Routes } from './Routes'
import './App.css'

function App(){

  return (
    <Router>
      <Switch>
          <Route path="/"> <NotesPage/> </Route>
          <Route path="/notes/:noteId"> <NoteDetailPage/> </Route>
          <Route> <NotFoundPage/></Route>
      </Switch>
    </Router>
  )
}

export default App