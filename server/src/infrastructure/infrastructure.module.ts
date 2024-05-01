import { Global, Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from './config/config.module';

@Global()
@Module({
  imports: [ConfigModule, LoggerModule.forRoot({ useExisting: true })],
})
export class InfrastructureModule {}
