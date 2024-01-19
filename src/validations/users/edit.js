const {body} = require('express-validator')
const editValidator = [
    body('email', 'Введите почту.').optional().isString().isEmail().withMessage('Неверный формат почты.'),
    body('password', 'Введите пароль.').optional().isString().isLength({
        min:7,
        max:40
    }).withMessage('Допустимое кол-во символов от 6 до 40'),
    body('first_name').optional().isString(),
    body('patronymic').optional().isString(),
    body('last_name').optional().isString(),
    body('phone').optional().isString(),
    body('logo').optional().isString(),
    body('role_id').optional().isString(),
    body('grad_id').optional().isString(),
    body('is_allow_true').optional().isString()

]

module.exports = editValidator