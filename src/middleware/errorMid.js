const ApiError = require('../exceptions/ApiErrors.js')

module.exports = function(err, req, res, next){
    console.log(err)
    if(err instanceof ApiError){
        return res.status(err.status).json({
            message: err.message,
            errors: err.erros
        })
    }
    return res.status(500).json({
        message:'Непредвиденная ошибка',
        errors: err
    })
}