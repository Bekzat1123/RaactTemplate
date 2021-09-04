import express from 'express'
import * as path from "path";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 8090
const server = express()

server.use(cors())

server.get('/api/v1/test', (req,res) => {
    res.send('Server Ok!!!!!!!')
})

if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.resolve('client/build')))
    server.get('/*', (req,res) => {
        res.sendFile(path.resolve('client/build/index.html'))
    })
}

server.listen(port, () => {
    console.log(`Server has been started on http://localhost:${port}`)
})

