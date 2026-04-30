import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  async findAllByUser(userId: number) {
    return this.prisma.character.findMany({ where: { userId } });
  }

  async create(data: any, userId: number) {
    return this.prisma.character.create({
      data: {
        ...data,
        userId,
        stats: { create: data.stats },
      },
    });
  }

  async findOne(id: number, userId: number) {
    return this.prisma.character.findFirst({
      where: { id, userId },
      include: { stats: true },
    });
  }

  async update(id: number, data: any) {
    return this.prisma.character.update({ where: { id }, data });
  }
}