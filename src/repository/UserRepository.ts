import "reflect-metadata"
import { AppDataSource } from "../data-source"
import { Users } from "../entity/Users"

export class UserRepository {
    
    getAll = async () => {
        await AppDataSource.initialize()
        return AppDataSource.manager.find(Users)
    }

    getOne = async (idUser: number) => {
        await AppDataSource.initialize()
        return  AppDataSource.manager
            .createQueryBuilder(Users, "user")
            .where("user.id = :id", { id: idUser })
            .getOne()
    }
}

