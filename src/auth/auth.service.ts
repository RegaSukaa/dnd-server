import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateTelegramUser(telegramId: string, username?: string) {
    let user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user) {
      user = await this.prisma.user.create({ data: { telegramId, username } });
    }
    return this.jwtService.sign({ sub: user.id, telegramId: user.telegramId });
  }
}