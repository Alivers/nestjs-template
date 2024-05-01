import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GetUserDto } from './user.dto';
import { AuthGuard } from '../../common/auth/auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard)
  @Post('get')
  async getUser(@Body() param: GetUserDto) {
    return { userId: 'test' };
  }
}
