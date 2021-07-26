const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const todoRouter = require('./routes/todo')
const sequelize = require('./utils/database')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.use('/api/todo', todoRouter)

app.use((req, res) => {
    res.sendFile('/index.html')
})

async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server running in port - ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
