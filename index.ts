import express, {Application, Request, Response} from 'express'
const app: Application = express()
const port = process.env.PORT || 5000
var bodyParser = require('body-parser')
var user = require('./config/user.route')

app.use(bodyParser.json())

app.post('/users', user.addNewUser)
app.put('/users/:id', user.updateUser)
app.get('/users', user.listUsers)
app.get('/users/:id', user.getOneUser)
app.delete('/users/:id', user.removeUser)
app.get('/ping', (req, res) => {
    res.status(200).send('ping')
})

app.listen(port, () => `server running on port ${port}`)
