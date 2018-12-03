const express = require('express')
const server = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator/check')
const PORT = 3000

// session config
server.use(session({
    secret: 'kickdown.in.th',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

// bodyParser config
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.post('/', 
    [
        check('name').not().isEmpty()
    ], 
    (req, res) => {
        try {
            validationResult(req).throw()
            res.json(req.body)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
)

server.get('/session', (req, res) => {
    req.session.item = 'hello world'
    res.end('set session')
})


server.get('*', (req, res) => {
    res.end(`<h1>Backend Server is Started. Session is ${req.session.item}</h1>`)
})

server.listen(PORT, () => console.log('Server is started port : '+ PORT))