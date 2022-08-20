'use strict'
import { UserRepository } from "../repository/UserRepository"

export const getUsers = async () => {
    console.log('entrou controller')
    var users
    let repository = new UserRepository()
    await repository.getAll()
    .then(user => {
        users = user
    }).catch(error => console.log(error))
    console.log(users)
    return users
}
