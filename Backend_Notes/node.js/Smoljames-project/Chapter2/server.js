// The address of this server connected to the network is: 
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express') //-this more or less imports the express package and we use the variable with where we need it. 
const app = express() // this defines the backend application
const PORT = 8383 // referenced to have the variable name in all caps. pick a 4 digit port number that's available


{/* the core requirements of getting a backend server up and running is very minimal
granted it does nothing but after telling node in the terminal to run it. "node server.js" 
it will start listenting to network requests until you manual close it
const express = require('express')
const app = express() 
const PORT = (look into on how to find port number)
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)) */}

// * Ctrl+C in terminal kills the program. When there are programs that are indefinitely running you need to manually kill them.
// * npm run dev is a script in the package.json file that you can manipulate. upon initial creation "npm run dev" is not in there.
/**
**  "scripts": {
**  "dev" : "node server.js", 
**  "test": "echo \"Error: no test specified\" && exit 1"
  },
 */

let data = ['james']

// Middleware
app.use(express.json())

/**  
** At base the server isn't ready to handle incomming requests or interpret incoming requests.
** Below in James' notes talks about some of the things that need setup to handle incoming requests
** VERBs(methods) are what help the server communicate with the client side. Paths are just additions to the home page of your weblink that lead to other parts of your page.
*/
// ENDPOINT - HTTP VERBS (method) && Routes (or paths)
//! The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code to respond appropriately, and these locations or routes are called endpoints)

//! Type 1 - Website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)

/**
** we are configuring how home route which at base requires this code here:
*? app.get('/', ()=>{})
** this will help with incoming network requests to route to the home page
** this needs to take at least 2 arguements. First is the route or path. For home routes they only take "/"
** the second is the request and response. which is taken in the form of a arrow function ex (req,res)=>{}
** within the brackets you write your code to send the response to the client request
 */

/**
app.get('/', (req, res) => {
** this is endpoint #1 - /
    console.log('Yay I hit an endpoint', req.method) //the req.method calls the verb which in this case is "HTTP VERB"
    res.sendStatus(200) //* 100-199(received and in process), 200-299(successful request), 300-399(successful but possibly has more than 1 response ), 400-499(communication error), 500-599(server side error)
** reposnse types: html, json, strings, statuscodes, etc. There's more i'm sure but this was what was mentioned in the video
}
* we understand the intention of said request with the req part of arguement and we response with the res part of the arguement
* Its also really straight forward to add more routes/paths. you just create another app.get function but with a different route name but still using the home name
 */

app.get('/', (req, res) => {
    console.log('User requested the home page website')
    res.send(`
        <body style="background:pink;color: blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is my script')</script>
        `)
})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>dashboard</h1>
        <a href="/">home</a>
        </body>
        
        
        `)
})

/**
** there's an extension call, client emulator that helps client side testing especially when you're testing for certain things like data point api's to see how you would get said information.
*todo go to extensions tab; install rest client by huachao mao; build a file named test.rest or rest.client,

*/

// Type 2 - API endpoints (non visual)

//CRUD-method create-post read-get update-put and delete-delete

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.status(599).send(data)
})

app.post('/api/data', (req, res) => {
    // someone wants to create a user (for example when they click a sign up button)
    // the user clicks the sign up button after entering their credentials, and their browser is wired up to send out a network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(203)
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)) // this line will always be at the end.
// Once configured this will listen to incoming requests. 
// The arrow function on line 66 in this case is used as a call back function and will execute when the site is up and running. 
// ${} is a way to inject variables into template literal strings 