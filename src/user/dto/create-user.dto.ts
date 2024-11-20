import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example:"bekzod",description:"User name"})
    @IsString()
    name: string;

    @ApiProperty({example:"xaydarov",description:"User sername"})
    @IsString()
    lastname: string;

    @ApiProperty({example:13,description:"User name"})
    @IsNumber()
    age: number;

    @ApiProperty({example:"11.10.2024",description:"User name"})
    @IsDate()
    birth_day: string;
    @ApiProperty({example:"+99899003344",description:"User phone"})
    @IsString()
    phone: string;
    
    @ApiProperty({example:"xaydarov",description:"User lastname"})
    @IsString()
    password: string;
}