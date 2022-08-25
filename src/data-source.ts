import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "ec2-34-227-135-211.compute-1.amazonaws.com",
    port: 5432,
    username: "ywwrtcftujlcdw",
    password: "6e6c1c8bcc37258160df90c3fc4a7c0550ee519d77ff74839ea07938a2c7f44f",
    database: "d7jvbbg96qrart",
    synchronize: true,
    logging: false,
    entities: [Users],
    migrations: [],
    subscribers: [],
})
