import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CreateNinjaDto } from './dto/create-ninja-dto';
import { UpdateNinjaDto } from './dto/update-ninja-dto';

import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('type') type: string) {
    return this.ninjasService.getNinjas();
  }

  @Get(':id')
  getOneNinja(@Param('id') id: number) {
    return this.ninjasService.getNinjaById(id);
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  @Put(':id')
  updateNinja(@Param('id') id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(id, updateNinjaDto);
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: number) {
    return this.ninjasService.removeNinja(id);
  }
}
