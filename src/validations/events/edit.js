const {body} = require('express-validator')
const editValidator = [
    body('name', 'Введите название мероприятия.').optional().isString(),
    body('date_start', 'Введите дату начала мероприятия.').optional().isISO8601().toDate(),
    body('date_end', 'Введите дату конца мероприятия.').optional().isISO8601().toDate(),
    body('desc', 'Введите описание мероприятия.').optional().isString(),
    body('link', 'Введите ссылку на мероприятие.').optional().isString(),
    body('count_member').optional().isString(),
    body('earnings', 'Введите размер призового фонда.').optional().isDecimal(),
]

module.exports = editValidator