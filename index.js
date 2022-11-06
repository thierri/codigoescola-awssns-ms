import express from "express"
import cors from "cors"

const app = express()

const dados = []

app.use(express.json({ type: ['text/*', '*/json'] }))
app.use(cors())

app.get('/', (request, response) => {
    console.log('Obtendo estatísticas... (GET)')
    response.send(dados)
})

app.post('/', (request, response) => {
    console.log('Nova mensagem recebida... (POST)')

    if (request.body.SubscribeURL) {
        console.log('-> URL para inscrição: ' + request.body.SubscribeURL)
    }

    if (request.body.Message) {
        console.log('-> Mensagem: ' + request.body.Message)
    }

    dados.push({
        message: request.body.Message,
        timestamp: Date.now()
    })

    response.send({ ok: true })
})

const porta = process.argv[2]

app.listen(porta, () => {
    console.log('Microservico Rodando! Porta: ' + porta)
})