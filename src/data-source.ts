import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ec2-44-205-112-253.compute-1.amazonaws.com",
    port: 5432,
    username: "rujkavpphfoitj",
    password: "3b0c6e90a9233a1f2ef58bdecf547c318ee961b9de6c065b0a96facbe3876dc7",
    database: "d8emfo88r21ds1",
    synchronize: true,
    logging: false,
    entities: [Users],
    migrations: [],
    subscribers: [],
})
