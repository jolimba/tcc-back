'use strict'
import { UserRepository } from "../repository/UserRepository"
import { AppDataSource } from "../data-source"

export const getUsers = async () => {
    let err
    let users
    let repository = new UserRepository()
    await repository.getAll()
    .then(user => {
        users = user
        AppDataSource.destroy()
    }).catch(error => {
        err = error.message
    })
    if (err) {
        return err
    }
    return users
}

export const getOneUser = async (id: number) => {
    let err
    let user
    let repository = new UserRepository()
    await repository.getOne(id)
    .then(getUser => {
        user = getUser
        AppDataSource.destroy()
    }).catch(error => {
        err = error.message
    })
    if (err) {
        return err
    }
    return user
}

export const addNewUser = async (body: any) => {
    let err
    let repository = new UserRepository()
    await repository.addNewUser(
        body.first_name,
        body.last_name,
        body.birth_date,
        body.email_user,
        body.login_user,
        body.pw_user
    )
    .then(() => {
        AppDataSource.destroy()
    }).catch(error => {
        err = error.message
    })
    if (err) {
        return err
    }
    return 'usuário criado'
}

export const updateUser = async (id: number, body: any) => {
    let err
    let repository = new UserRepository()
    await repository.updateUser(
        id,
        body.first_name,
        body.last_name,
        body.birth_date,
        body.email_user,
        body.login_user,
        body.pw_user
    )
    .then(() => {
        AppDataSource.destroy()
    }).catch(error => {
        err = error.message
    })
    if (err) {
        return err
    }
    return 'usuário atualizado'
}

export const removeUser = async (id: number) => {
    let err
    let repository = new UserRepository()
    await repository.removeUser(id)
    .then(() => {
        AppDataSource.destroy()
    }).catch(error => {
        err = error.message
    })
    if (err) {
        return err
    }
    return 'usuário removido'
}