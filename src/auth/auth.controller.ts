import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Body() body: { telegramId: string; username?: string }) {
    const token = await this.authService.validateTelegramUser(body.telegramId, body.username);
    return { access_token: token };
  }
}