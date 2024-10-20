const express = require('express')
const app = express()

const port = 3000

let pessoas = [
	{
		nome: "Summer",
		idade: "23",
		id: 1
	},
	{
		nome: "Jhon",
		idade: "20",
		id: 2
	}
]

app.use(express.json())

app.get('/', (req, res) => {
	console.log('bati na raiz')
	res.send('Estou na minha API')
})

app.get('/pessoas', (req, res) => {
	console.log('bati em pessoas')
	res.json(pessoas)
})

app.post('/pessoas',(req,res)=>{
	console.log('bati em pessoas')
	const pessoa = req.body
	pessoas.push(pessoa)
	res.json(pessoas)
})

app.listen(()=>{
	console.log('Servidor online na porta', port)
})

