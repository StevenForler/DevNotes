import express from 'express'
import bcrypt from 'bcryptjs' // this package has all the tools needed to encrypt all the passwords stored
import jwt from 'jsonwebtoken' // creates an alpha numeric key that generates a password associated to a user to authenticate them for future web requests
import db from '../db.js'

const router = express.Router() /* this helps create routes easier by tagging at the end of your path anything using the "router." add-on in the beginning.
                                    anything that uses that prefix, the server will what its tied to and stick it to the route creating a new webpath 
                                    ex: app.use('/auth', authRoutes) authRoutes refers to any function with the prefix previously mentioned.*/

// Register a new user endpoing /auth/register
router.post('/register', (req, res) => { // by default, no res set, it can take 5-15sec to timeout.
    const { username, password } = req.body /* this can be done also by using this: const body = req.body
                                                this pulls the json body of the incoming request
                                                but this requires extra steps to access the username and password keys
                                                however Destructuring it saves this step*/
    // save the username and an irreversibly encrypted password
    // save gilgamesh@gmail.com | aklsdjfasdf.asdf..qwe..q.we...qwe.qw.easd

    // encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8)

    // save the new user and hashed password to the db
    try {
        const insertUser = db.prepare(`INSERT INTO users (username, password) VALUES (?, ?)`)
        const result = insertUser.run(username, hashedPassword)

        // now that we have a user, I want to add their first todo for them
        const defaultTodo = `Hello :) Add your first todo!`
        const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?, ?)`)
        insertTodo.run(result.lastInsertRowid, defaultTodo)

        // create a token
        const token = jwt.sign({ id: result.lastInsertRowid }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }
})

router.post('/login', (req, res) => {
    // we get their email, and we look up the password associated with that email in the database
    // but we get it back and see it's encrypted, which means that we cannot compare it to the one the user just used trying to login
    // so what we can to do, is again, one way encrypt the password the user just entered

    const { username, password } = req.body

    try {
        const getUser = db.prepare('SELECT * FROM users WHERE username = ?')
        const user = getUser.get(username)

        // if we cannot find a user associated with that username, return out from the function
        if (!user) { return res.status(404).send({ message: "User not found" }) }

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        // if the password does not match, return out of the function
        if (!passwordIsValid) { return res.status(401).send({ message: "Invalid password" }) }
        console.log(user)

        // then we have a successful authentication
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }

})


export default router