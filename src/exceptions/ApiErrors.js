module.exports = class ApiError extends Error {
    status
    erros
    constructor(status, message, erros = []){
         super(message)
         this.status = status
         this.erros = erros
    }

    static UnathorizedError() {
        return new ApiError(401, 'Пользователь не авторизован')
    } 

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    } 
}