import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({ tableName: "user" })
export class User extends Model<User> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    @ApiProperty({ example: "1", description: "User ID" })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ example: "bekzod", description: "User name" })
    FirstName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ example: "xaydarov", description: "User lastname" })
    LastName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ example: "+998990072778", description: "User phone" })
    phone: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    @ApiProperty({ example: "13", description: "User age" })
    age: number;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ example: "subject", description: "User subject" })
    subject: string

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ example: "Namangan Shahar", description: "User address" })
    address: string
}