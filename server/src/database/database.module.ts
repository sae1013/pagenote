import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from 'src/notes/entities/note.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/notes'),
    MongooseModule.forFeature([
      {
        name: Note.name,
        schema: NoteSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
  providers: [],
})
export class DatabaseModule {}
