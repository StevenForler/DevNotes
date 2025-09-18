import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5003

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, '../../frontend')))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})