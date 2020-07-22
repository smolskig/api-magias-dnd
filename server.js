const Express = require('express')
const connectDb = require('./src/database/database')
const routes = require('./src/routes')
const bodyParser = require('body-parser')

const PORT = process.env.port || 8000

const App = Express()
connectDb()

App.use(Express.json())
App.use(routes)


App.listen(PORT,() => console.log('Server iniciado na porta',PORT))