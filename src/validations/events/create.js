const {body} = require('express-validator')
const createValidator = [
    body('name', 'Введите название мероприятия.').isString(),
    body('date_start', 'Введите дату начала мероприятия.').isISO8601().toDate(),
    body('date_end', 'Введите дату конца мероприятия.').isISO8601().toDate(),
    body('desc', 'Введите описание мероприятия.').isString(),
    body('link', 'Введите ссылку на мероприятие.').isString(),
    body('count_member').isString(),
    body('earnings', 'Введите размер призового фонда.').isDecimal(),


]

module.exports = createValidator