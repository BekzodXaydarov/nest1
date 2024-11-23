import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ example: "bekzod", description: "User name" })
    @IsString()
    FirstName: string;

    @ApiProperty({ example: "xaydarov", description: "User lastname" })
    @IsString()
    LastName: string;

    @ApiProperty({ example: "+998990072778", description: "User phone" })
    @IsString()
    phone: string;

    @ApiProperty({ example: "13", description: "User age" })
    @IsNumber()
    age: number;

    @ApiProperty({ example: "subject", description: "User subject" })
    @IsString()
    subject: string

    @ApiProperty({ example: "Namangan Shahar", description: "User address" })
    @IsString()
    address: string
}