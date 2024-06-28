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
  create(createUserDto: CreateUserDto) {
    return this.userModel.create({ ...createUserDto });
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

/*
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './entities/note.entity';
import { Model } from 'mongoose';
import { RedisService } from 'src/redis/redis.service';
import { UpdateNoteDto } from './dto/update-note.dto';
@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private noteModel: Model<Note>,
    private redisService: RedisService,
  ) {}

  async create(data: CreateNoteDto) {
    const newNote = await this.noteModel.create({ ...data });
    return newNote;
  }

  async findAll() {
    const notes = await this.noteModel.find();

    return notes;
  }

  async findOne(id: string) {
    const note = await this.noteModel.findById({ _id: id });
    return note;
  }

  async updateNote({ _id, ...data }: UpdateNoteDto) {
    const note = await this.noteModel
      .findByIdAndUpdate(
        _id,
        { $set: data },
        {
          new: true,
        },
      )
      .exec();
    return note;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }

  // NOTE: Redis API
  async findNoteById(id: string): Promise<Note> {
    const cachedNote = await this.redisService.get(id);
    if (cachedNote) {
      return JSON.parse(cachedNote);
    }
    const note = await this.noteModel.findById(id).exec();
    if (!note) {
      throw new NotFoundException('Note not found');
    }

    // 조회된 노트를 Redis에 저장합니다.
    await this.redisService.set(id, JSON.stringify(note));

    return note;
  }
}

*/
