import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from '../../../application/user/user.service';
import { User, UserRole } from '../../../domain/entities/user.entity';
import { UserModule } from 'src/application/user/user.module';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(
    @Body() { email, password, role }: { email: string; password: string; role: UserRole }
  ): Promise<User> {
    return this.userService.createUser(email, password, role);
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User | null> {
    return this.userService.findById(id);
  }
}
