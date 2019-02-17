import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as path from 'path'

const PORT = 3000

const todos: string[] = ['get milk', 'get butter', 'learn Javascript']

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
  }

  private config(): void {
    this.app.use(cors())
    this.app.use(cookieParser())
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(express.static(path.resolve(__dirname, 'public')))
    this.app.set('view engine', 'ejs')
    this.app.get('*', (req, res) => {
      res.render(path.resolve(__dirname, 'public', 'index.ejs'), { todos })
    })
  }
}

const app = new App().app

app.post('/todo', (req, res) => {
  todos.push(req.body.todo)
  res.json(req.body)
})

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`)
})
