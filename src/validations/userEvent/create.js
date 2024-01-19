const {body} = require('express-validator')
const createValidator = [
    body('user_id', 'Введите id пользователя.').isString(),
    body('event_id', 'Введите id мероприятия.').isString(),

]

module.exports = createValidator