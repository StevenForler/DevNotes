import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5003

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

// middleware
app.use(express.json())

// Serves the HTML file from the requested directory
app.use(express.static(path.join(__dirname, '../../frontend'))) // this finds the folder that's a level higher than where it defaults.(in this case 2 levels)

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
    res.sendStatus(201)
})

app.listen(PORT, () => { // listen requests are always last
    console.log(`Server has started on port: ${PORT}`)
})