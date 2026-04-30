import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [PrismaModule, AuthModule, CharactersModule],
})
export class AppModule {}