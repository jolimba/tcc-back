import { AppDataSource } from "./data-source"
import { Users } from "./entity/Users"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new Users()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.birthDate = "11-11-2002"
    user.emailUser = "hauaui@gmail.com"
    user.loginUser = "huehUser"
    user.pwUser = "1234"
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(Users)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
