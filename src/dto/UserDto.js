class UserDto {

    constructor(model){
        this.id = Number(model.id ) ?? ""
        this.email = model.email ?? ""
        this.first_name = model.first_name ?? ""
        this.patronymic = model.patronymic ?? ""
        this.last_name = model.last_name ?? ""
        this.phone = model.phone ?? ""
    }
}

exports.UserDto = UserDto