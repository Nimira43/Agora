import express from 'express'
const port = 5001

const app = express()

app.get('/', (req, res) => {
  res.send('API running....')
})

app.listen(port, () => console.log(`Server running on Port ${port}`))
