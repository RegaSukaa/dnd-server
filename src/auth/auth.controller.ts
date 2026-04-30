import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  async login(@Req() req) {
    // В реальном приложении здесь будет проверка Telegram initData
    // Для упрощения пока принимаем telegramId из тела запроса
    const { telegramId, username } = req.body;
    const token = await this.authService.validateTelegramUser(telegramId, username);
    return { access_token: token };
  }
}