const express = require('express')
const server = express()
const PORT = 3000

server.get('*', (req, res) => {
    res.end('<h1>Backend Server is Started</h1>')
})

server.listen(PORT, () => console.log('Server is started port : '+ PORT))