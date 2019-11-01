const express = require('express')
const app = express()
const port = 3000
const users = require('./usuarios.json')
const books = require('./livros.json')

//Validacion
app.all('*', (req, res, next) => {
    console.log("rodandooo")
    next()
})

//sem a linha abaixo o json se perde
app.use(express.json())

//server
app.listen(port, function () {
    console.log(`App rodando na porta ${port}`)
})

//rotas
app.get('/', (req, res) => {
    res.send('Olá, povaum!')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    res.send(users.find(u => u.id == id))
})

app.get('/books', (req, res) => {
    res.send(books)
})
app.get('/books/:id', (req, res) => {
    const id = req.params.id
    res.send(books.find(b => b.id == id))
})

app.get('/books/:id/users/:idUsers', (req, res) => {
    const livroId = req.params.livroId
    const userId = req.params.userId
    const book = books.find(b = b.id == livroId)
    const user = users.find(u => u.id == userId)
    res.send([book, user])
})

app.get('/country', (req, res) => {
    const pais = req.query['pais']
    const estado = req.query['estado']
    const cidade = req.query['cidade']

    res.send({
        'pais': pais,
        'estado': estado,
        'cidade': cidade
    })
})