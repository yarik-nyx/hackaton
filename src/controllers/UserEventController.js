const ApiError = require('../exceptions/ApiErrors.js')
const {validationResult} = require('express-validator')
const {UserEventService} = require('../services/UserEventService.js')
class UserEventController{

    async createUserEvent(req, res, next){
        try {
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }
            const{user_id, event_id} = req.body
            const userEvent = await UserEventService.createUserEvent(user_id, event_id)
            await res.send({
                status:'OK',
                userEvent:userEvent
            })
        } catch (error) {
            next(error)
        }
    }

    async getUsersOfEvent(req, res, next){
        try {
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const{id} = req.params
            const users = await UserEventService.getUsersOfEvent(id)
            await res.send({
                status:'OK',
                users:users
            })

        } catch (error) {
            next(error)
        }
        
    }

    async getEventsOfUser(req, res, next){
        try {
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const{id} = req.params

            const events = await UserEventService.getEventsOfUser(id)
            await res.send({
                status:'OK',
                events:events
            })
        } catch (error) {
           next(error) 
        }
    }


    async deleteUserEvent(req, res, next){
        try {
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const{user_id, event_id} = req.body
            const userEvent = await UserEventService.deleteUserEvent(user_id, event_id)

            await res.send({
                status:'OK',
                userEvent: userEvent
            })

        } catch (error) {
            next(error) 
        }
    }


}

exports.UserEventController = new UserEventController()