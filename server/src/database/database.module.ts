import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from 'src/notes/entities/note.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/notes'),
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
