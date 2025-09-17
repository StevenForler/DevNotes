import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5003

//get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)
// Get directory name from the file path
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, '../../frontend')))

// Serving up the HTML file from the /public directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'src', 'App.jsx'))
})

app.listen(PORT, () => {
    console.log (`Server has started on port: ${PORT}`)
})