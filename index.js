import express from "express"
import cors from "cors"

const app = express()

const dados = []

app.use(express.json({ type: ['text/*', '*/json'] }))
app.use(cors())

app.get('/', (request, response) => {
    console.log('Endpoint get solicitado!!')
    response.send(dados)
})

app.post('/', (request, response) => {
    console.log('Endpoint POST solicitado!!')
    console.log(request.body)
    dados.push({
        message: request.body.Message,
        timestamp: Date.now()
    })
    response.send('OI!')
})


app.listen(3000, () => {
    console.log('Microservico Rodando!')
})