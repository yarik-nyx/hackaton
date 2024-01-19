const { UserController } = require('../controllers/UserController.js')
const  signUpValidator  = require('../validations/users/signUp.js')
const editValidator = require('../validations/users/edit.js')
const { Router } = require('express')


const userRouter = new Router()

userRouter.post('/signup', signUpValidator, UserController.registration)

userRouter.post('/signin', signUpValidator, UserController.login)

userRouter.patch('/edit/:id', editValidator, UserController.edit)

// router.post('/logout', UserController.logout)

userRouter.get('/users', UserController.getUsers)

exports.userRouter = userRouter