import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ec2-34-247-72-29.eu-west-1.compute.amazonaws.com",
    port: 5432,
    username: "kavpacjsgspjoe",
    password: "32c8bc0c2e4a774565f7f6f4185cb85b10f73244174f74396371e0c6a5fff578",
    database: "d2ejnpq1c6sfup",
    synchronize: true,
    logging: false,
    entities: [Users],
    migrations: [],
    subscribers: [],
})
