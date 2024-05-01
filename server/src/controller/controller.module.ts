import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { DomainModule } from '../domain/domain.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  imports: [DomainModule, JwtModule],
})
export class ControllerModule {}
