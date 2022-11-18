const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        'age' : 30,
        'birthName' :'Shéyaa Bin Abraham-Joseph',
        'birthPlace' : 'London, England'
    },

    'chance the rapper': {
        'age' : 30,
        'birthName' :'Chancelor Jonathan Bennett',
        'birthPlace' : ' Chicago, Illinois'
    },

    'eminem': {
        'age' : 50,
        'birthName' :'Marshall Bruce Mathers III',
        'birthPlace' : ' St. Joseph, Missouri, U.S.'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rapperName = request.params.rapperName.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else {
        response.json('N/A')
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})