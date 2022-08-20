import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Lists {

    @PrimaryGeneratedColumn()
    id: number
}
