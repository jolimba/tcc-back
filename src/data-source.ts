import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ec2-34-247-72-29.eu-west-1.compute.amazonaws.com",
    port: 5432,
    username: "tmzmfdipthwvqa",
    password: "0f0b74a647b689c96dc79b2ce3ceb62e12d4b1d49d839e6c846abd766e125659",
    database: "dcjiqp6so4iqth",
    synchronize: true,
    logging: false,
    entities: [Users],
    ssl: true
})
