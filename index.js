require('dotenv').config()
const express = require('express')
const errorMid = require('./src/middleware/errorMid.js')
const {userRouter} = require('./src/routers/users.js')
const {eventRouter} = require('./src/routers/events.js')
const {userEventRouter} = require('./src/routers/userEvent.js')
const swaggerUI = require('swagger-ui-express')
const {specs} = require('./src/swagger/swagger.js')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))


app.use(cors())
app.use(express.json())
app.use('', userRouter)
app.use('/events', eventRouter)
app.use('/user_event', userEventRouter)
app.use(errorMid)

function start(){
    try {
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
          })
    } catch (error) {
        console.log(error);
    }

}

start()
