'use strict'
import { UserRepository } from "../repository/UserRepository"
import { AppDataSource } from "../data-source"

export const getUsers = async () => {
    var users
    let repository = new UserRepository()
    await repository.getAll()
    .then(user => {
        users = user
        AppDataSource.destroy()
    }).catch(error => console.log(error))

    return users
}

export const getOneUser = async (id: number) => {
    console.log('entrou controller')
    var users
    let repository = new UserRepository()
    await repository.getOne(id)
    .then(user => {
        users = user
        AppDataSource.destroy()
    }).catch(error => console.log(error))
    return users
}