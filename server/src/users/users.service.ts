import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    // private redisService: RedisService,
  }
  async create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel({ ...createUserDto });
    return await newUser.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  signUp() {}
}
