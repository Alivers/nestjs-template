import { Module } from '@nestjs/common';
import { DomainModule } from './domain/domain.module';
import { RepositoryModule } from './repository/repository.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    InfrastructureModule,
    DomainModule,
    RepositoryModule,
    CommonModule,
  ],
})
export class AppModule { }
