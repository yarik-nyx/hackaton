const {body} = require('express-validator')
const signUpValidator = [
    body('email', 'Введите почту.').isString().isEmail().withMessage('Неверный формат почты.'),
    body('password', 'Введите пароль.').isString().isLength({
        min:7,
        max:40
    }).withMessage('Допустимое кол-во символов от 6 до 40'),
]

module.exports = signUpValidator