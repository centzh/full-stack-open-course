const express = require('express')
const app = express()
app.use(express.json())

// const requestLogger = (request, response, next) => {
//     console.log('Method:', request.method)
//     console.log('Path:  ', request.path)
//     console.log('Body:  ', request.body)
//     console.log('---')
//     next()
// }

// app.use(requestLogger)

var morgan = require('morgan')
app.use(morgan('tiny'))

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// Fetch list of all people in the phonebook (server)
app.get('/api/persons', (request, response) => {
    response.json(persons)
})

// Fetch general information about the phonebook
app.get('/info', (request, response) => {
    // Express automatically sets value of Content-Type header to be text/html since parameter is a string
    response.send(`<p>Phonebook has info for ${persons.length} people </p>`)
})

// Fetch a person in the phonebook
app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    if(person){
        response.json(person)
    }else{
        response.status(400).end()
    }
})

// Delete a person from the phonebook
app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    // This is the first priority 
    const names = persons.map(person=>person.name)
    if(names.includes(body.name)){
        return response.status(400).json({error: 'name must be unique'})
    }
    if(!body.name){
        return response.status(400).json({error: 'name is missing'})
    }
    if(!body.number){
        return response.status(400).json({error: 'number is missing'})
    } 

    const person = {
        id: String(Math.floor(Math.random()*10000)),
        name: body.name,
        number: body.number,
    }
    persons = persons.concat(person) // must assign, since it returns a copy not inplace
    response.json(person)
})

// const unknownEndpoint = (request, response) => {
//     response.status(404).send({ error: 'unknown endpoint' })
// }
  
// app.use(unknownEndpoint)


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})