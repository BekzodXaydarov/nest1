import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User
  ){}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }

  async findAll() {
    return await this.userRepository.findAll({ include: { all: true } });
  } 

  async findOne(id: number) {
    const check = await this.userRepository.findByPk(id);
    if (!check) {
      throw new HttpException('Id notogri', HttpStatus.BAD_REQUEST);
    }
    return await this.userRepository.findByPk(+id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const check = await this.userRepository.findByPk(id);
    if (!check) {
      throw new HttpException('Id notogri', HttpStatus.BAD_REQUEST);
    }
    const newStudent = await this.userRepository.update(
      {
        ...updateUserDto,
      },
      { where: { id: id }, returning: true },
    );
    return newStudent;
  }

  async remove(id: number) {
    const check = await this.userRepository.findByPk(id);
    if (!check) {
      throw new HttpException('Id notogri', HttpStatus.BAD_REQUEST);
    }
    await this.userRepository.destroy({
      where: {
        id: +id,
      },
    });

    return check;
  }
}
