import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() data: CreateNoteDto) {
    return this.notesService.create(data);
  }

  @Patch()
  update(@Body() data: UpdateNoteDto) {
    this.notesService.updateNote(data);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll() {
    console.log('/notes ');
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.notesService.findOne(id); NOTE: 일반 MONGODB에 저장하는 API
    return this.notesService.findNoteById(id); // REDIS API
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
  //   return this.notesService.update(id, updateNoteDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
