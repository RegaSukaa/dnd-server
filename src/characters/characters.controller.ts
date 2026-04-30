import { Controller, Get, Post, Put, Param, Body, Req } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('api/characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}

  @Get()
  async findAll(@Req() req) {
    // в реальном проекте userId берётся из JWT
    const userId = 1; // временно
    return this.charactersService.findAllByUser(userId);
  }

  @Post()
  async create(@Body() createDto: any, @Req() req) {
    const userId = 1; // временно
    return this.charactersService.create(createDto, userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.charactersService.findOne(+id, 1);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: any) {
    return this.charactersService.update(+id, updateDto);
  }
}