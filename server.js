const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/scan', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'scan.html'))
})

app.get('/results', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'results.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ClassifyRight running on http://0.0.0.0:${PORT}`)
})
