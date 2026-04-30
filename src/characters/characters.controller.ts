import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('api/characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  // ❗️ Временная заглушка userId = 1, пока нет авторизации
  private userId = 1;

  @Get()
  async findAll() {
    return this.charactersService.findAllByUser(this.userId);
  }

  @Post()
  async create(@Body() createDto: any) {
    return this.charactersService.create(createDto, this.userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.charactersService.findOne(+id, this.userId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: any) {
    return this.charactersService.update(+id, updateDto);
  }
}