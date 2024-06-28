import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class User extends Document {
  @Prop({ required: true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  secondName: string;

  @Prop()
  channel: string;

  @Prop()
  status: string;

  @Prop()
  createdAt: Date;

  @Prop()
  lastLogin: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
