import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../../../application/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }) {
    return this.authService.validateUser(email, password);
  }
}
