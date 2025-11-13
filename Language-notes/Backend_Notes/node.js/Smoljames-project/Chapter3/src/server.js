import express from 'express' // an out of practice way of importing express would look like this:  const express = require('express')
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
/* the imports from lines 2 and 3 are needed for the app.get to pull the frontend assets */
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

const app = express()
const PORT = process.env.PORT || 5003 // process.env.PORT just searches the env file to see if there's a port to reference first.

// Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url) //config line to help navigate the folder directory within our code
// Get the directory name from the file path
const __dirname = dirname(__filename) // this helps tell the system where to find the files that are within the directory 

// Middleware
app.use(express.json())
// Serves the HTML file from the /public directory
// Tells express to serve all files from the public folder as static assets / file. Any requests for the css files will be resolved to the public directory.
app.use(express.static(path.join(__dirname, '../public')))  // the ../ in locating the public folder just means it going up 1 folder to grab the actual location
                                                            // this also helps load the filesas static assets/files with the express.static

// Serving up the HTML file from the /public directory
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    /*  this function works in tandem with the __dirname and __filename variables.
        this will help the system find the file to fulfill this request. 
        in this case, output the index.html for the home page.*/
})

// Routes
app.use('/auth', authRoutes)
app.use('/todos', authMiddleware, todoRoutes)

app.listen(PORT, () => { // Reminder: .listen functions are always at the end of the code
    console.log(`Server has started on port: ${PORT}`)
})