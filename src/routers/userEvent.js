const { Router } = require('express')
const {UserEventController} = require('../controllers/UserEventController.js')
const createValidator = require('../validations/userEvent/create.js')
const userEventRouter = new Router()

userEventRouter.get('/event/:id', UserEventController.getUsersOfEvent)

userEventRouter.get('/user/:id', UserEventController.getEventsOfUser)

userEventRouter.post('/', createValidator, UserEventController.createUserEvent)

userEventRouter.delete('/', createValidator, UserEventController.deleteUserEvent)
exports.userEventRouter = userEventRouter