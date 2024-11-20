import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table({ tableName: "user" })
export class User extends Model<User> {
    @Column({type:DataType.INTEGER,primaryKey:true,autoIncrement: true})
    @ApiProperty({example:"1",description:"User ID"})
    id: number;

    @Column({type:DataType.STRING,allowNull:false})
    @ApiProperty({example:"bekzod",description:"User name"})
    name: string;

    @Column({type:DataType.STRING,allowNull:false})
    @ApiProperty({example:"xaydarov",description:"User lastname"})
    lastname: string;

    @Column({type:DataType.INTEGER,allowNull:false})
    @ApiProperty({example:"13",description:"User age"})
    age: number;

    @Column({type:DataType.DATE,allowNull:false})
    @ApiProperty({example:"11.10.2024",description:"User birth day"})
    birth_day: string;

    @Column({type:DataType.STRING,allowNull:false})
    @ApiProperty({example:"bekzod",description:"User name"})
    phone: string;

    @Column({type:DataType.STRING,allowNull:false})
    @ApiProperty({example:"password",description:"User password"})
    password: string;

}