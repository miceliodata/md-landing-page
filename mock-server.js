import express from 'express'
import cors from 'cors'

const app = express()
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

app.use(cors())
app.use(express.json())

app.post('/api/newsletter', (req, res) => {
    const { email } = req.body

    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email' })
    }

    console.log('Mock received:', email)
    res.json({ message: 'Thanks for subscribing!' })
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Mock API running at http://localhost:${PORT}/api/newsletter`)
})
