const {db} = require('../db/db.connection.js')
const {initModels} = require('../models/init-models.js')
const ApiError = require('../exceptions/ApiErrors.js')

class EventService{
    constructor(){
        this.models = initModels(db) 
    }

    async getAllEvents(){
        const events = await this.models.events.findAll()
        return events
    }

    async getOneEvent(id){
        const foundEvent = await this.models.events.findOne({where: {id}, raw: true})
        if(!foundEvent){
            throw ApiError.BadRequest('Ивент не найден.')
        }
        return foundEvent
    }

    async create(name, date_start, date_end, desc, link, count_member, earnings){
        const event = await this.models.events.create({name, date_start, date_end, desc, link, count_member, earnings}, {raw:true}) 

        return event
    }

    async edit(id, args){
        const foundEvent = await this.models.events.findOne({id})
        if(!foundEvent){
            throw ApiError.BadRequest('Ивент не найден.')
        }
        for(let key in args){
            foundEvent[key] = args[key]
        }
        await foundEvent.save()
        return foundEvent

    }

}

exports.EventService = new EventService()