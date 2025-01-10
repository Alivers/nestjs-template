import { UserRepository } from '@/repository/user/user.repo';
import { Module } from '@nestjs/common';

@Module({
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoryModule {}
