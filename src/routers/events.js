const {EventController} = require('../controllers/EventController.js')
const createValidator = require('../validations/events/create.js')
const editValidator = require('../validations/events/edit.js')
const { Router } = require('express')

const eventRouter = new Router()

eventRouter.get('/', EventController.getAllEvents)

eventRouter.get('/:id', EventController.getOneEvent)

eventRouter.post('/create', createValidator, EventController.create)

eventRouter.patch('/edit/:id', editValidator, EventController.edit)

exports.eventRouter = eventRouter