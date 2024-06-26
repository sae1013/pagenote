import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { DatabaseModule } from 'src/database/database.module';
import { RedisModule } from 'src/redis/redis.module';
@Module({
  imports: [DatabaseModule, RedisModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
