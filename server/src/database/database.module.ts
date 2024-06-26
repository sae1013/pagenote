import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Note, NoteSchema } from 'src/notes/schema/note';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/notes'),
    MongooseModule.forFeature([
      {
        name: Note.name,
        schema: NoteSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
  providers: [],
})
export class DatabaseModule {}
