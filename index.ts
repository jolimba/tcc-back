import express, {Application, Request, Response} from 'express'
const app: Application = express()
const port = 3333
const bodyParser = require('body-parser')
var user = require('./config/user.route')

app.use((req, res, next) => {
  bodyParser.json()
  express.json()
  next()
})

app.get('/users', user.listUsers);

app.get('/', (req: Request, res: Response) => {
  return res.json({
    success: true,
    something: 'cu'
  })
})

app.listen(port, () => `server running on port ${port}`)
