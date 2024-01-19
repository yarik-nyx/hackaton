const {db} = require('../db/db.connection.js')
const {initModels} = require('../models/init-models.js')
const ApiError = require('../exceptions/ApiErrors.js')

class UserEventService{
    constructor(){
        this.models = initModels(db) 
    }

    async createUserEvent(user_id, event_id){
        const foundUserEvent = await this.models.users_events.findOne({where: {user_id:user_id, event_id:event_id}})
        if(foundUserEvent){
            throw ApiError.BadRequest(`Пользователь уже записан на мероприятие.`)
        }
        
        const userEvent = await this.models.users_events.create({user_id:user_id, event_id:event_id})
        return userEvent

    }

    async getUsersOfEvent(id){
        const users = await this.models.users.findAll({
            include: {
                as: 'users_events',
                model: this.models.users_events,
                where: {
                    event_id: id
                },
                attributes:[]
            }
        })
        return users
    }

    async getEventsOfUser(id){
        const events = await this.models.events.findAll({
            include: {
                as: 'users_events',
                model: this.models.users_events,
                where: {
                    user_id: id
                },
                attributes:[]
            }
        })
        return events
    }

    async deleteUserEvent(user_id, event_id){
        const foundUserEvent = await this.models.users_events.findOne({where: {user_id:user_id, event_id:event_id}})
        if(!foundUserEvent){
            throw ApiError.BadRequest(`Пользователь не записан на мероприятие.`)
        }
        await foundUserEvent.destroy()
        return foundUserEvent


    }
}

exports.UserEventService = new UserEventService()