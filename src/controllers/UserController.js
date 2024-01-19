const {UserService} = require('../services/UserService.js')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/ApiErrors.js')

class UserController{

    async registration(req, res, next){
        try {
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const{email, password} = req.body

            const user = await UserService.registration(email, password)
            await res.status(201).send({
                status: 'OK',
                user:user
            })
        } catch (error) {
            next(error)
        }
        
    }

    async login(req, res, next){
        try {
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const{email, password} = req.body

            const user = await UserService.login(email, password)
            await res.status(201).send({
                status: 'OK',
                user:user
            })
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next){
        try {
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const{id} = req.params
            const args = req.body
            
            const user = await UserService.edit(id, args)
            await res.send({
                status:'OK',
                user:user
            })

        } catch (error) {
            next(error)
        }
    }



    async getUsers(req, res, next){
        try {
            const result = validationResult(req)
            if(!result.isEmpty()){
                return next(ApiError.BadRequest('Bad request', result.array({ onlyFirstError: true })))
            }

            const users = await UserService.getUsers()
            await res.send({
                status:'OK',
                users:users
            })
        } catch (error) {
            next(error)
        }
    }

}

exports.UserController = new UserController()