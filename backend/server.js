import express from 'express'
import products from './data/products.js'
const port = 5001


const app = express()

app.get('/', (req, res) => {
  res.send('API running....')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.listen(port, () => console.log(`Server running on Port ${port}`))
