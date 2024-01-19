const {db} = require('../db/db.connection.js')
const {initModels} = require('../models/init-models.js')
const ApiError = require('../exceptions/ApiErrors.js')
const {UserDto} = require('../dto/UserDto.js')
const bcrypt = require('bcrypt')

class UserService{
    constructor(){
        this.models = initModels(db) 
    }

    async getUsers(){
        const foundUsers = await this.models.users.findAll()
        const users = []
        for(let user of foundUsers){
            users.push(new UserDto(user))
        }
        return users
    }

    async registration(email, password){
        const foundUser = await this.models.users.findOne({where: {email}})
        if(foundUser){
            throw ApiError.BadRequest(`Пользователь с ${email} уже существует.`)
        }

        const hashedPass = await bcrypt.hash(password, 3)

        const userData = await this.models.users.create({email:email, password:hashedPass, role_id:2})
        const user = new UserDto(userData)
        return user

    }

    async login(email, password){
        const foundUser = await this.models.users.findOne({where: {email}})
        if(!foundUser){
            throw ApiError.BadRequest('Неверная почта или пароль.')
        }

        const isPassEqual = await bcrypt.compare(password, foundUser.password)

        if(!isPassEqual){
            throw ApiError.BadRequest(`Неверный логин или пароль.`)
        }

        const user = new UserDto(foundUser)
        return user

    }

    async edit(id, args){
        const foundUser = await this.models.users.findOne({where: {id}})
        if(!foundUser){
            throw ApiError.BadRequest('Пользователь не найден.')
        }
        console.log(args);
        for(let key in args){
            console.log(key);
            foundUser[key] = args[key]
        }
        await foundUser.save()
        const user = new UserDto(foundUser)
        return user
    }
    
}

exports.UserService = new UserService()