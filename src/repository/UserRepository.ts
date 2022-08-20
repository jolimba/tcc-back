import "reflect-metadata"
import { AppDataSource } from "../data-source"
import { Users } from "../entity/Users"

export class UserRepository {
    getAll = async () => {
        await AppDataSource.initialize()
        console.log('repository')
        let users = await AppDataSource.manager.find(Users)
        return users
    }
}

