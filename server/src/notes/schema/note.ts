import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Note extends Document {
  @Prop({ required: true })
  writer: string;

  @Prop()
  url: string;

  @Prop()
  uuid: string;

  @Prop()
  imageUrl: string;

  @Prop()
  tags: string[];

  @Prop()
  title: string;

  @Prop()
  contents: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
