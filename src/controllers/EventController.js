const {EventService} = require('../services/EventService.js')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/ApiErrors.js')

class EventController{

    async getAllEvents(req, res, next){
        try {

            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const events = await EventService.getAllEvents()
            await res.send({
                status: 'OK',
                events:events
            })
        } catch (error) {
            next(error)
        }
    }

    async getOneEvent(req, res, next){
        try {

            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const{id} = req.params

            const event = await EventService.getOneEvent(id)

            await res.send({
                status: 'OK',
                event:event
            })

        } catch (error) {
            next(error)
        }
    }

    async create(req,res,next){
        try {

            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const{name, date_start, date_end, desc, link, count_member, earnings} = req.body

            const event = await EventService.create(name, date_start, date_end, desc, link, count_member, earnings)

            await res.status(201).send({
                status: 'OK',
                event:event
            })
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next){
        const result = validationResult(req)
        if(!result.isEmpty()){
            return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
        }

        const{id} = req.params
        const args = req.body
        console.log(args);
        const event = await EventService.edit(id, args)

        await res.send({
            status: 'OK',
            event:event
        })


    }
}

exports.EventController = new EventController()