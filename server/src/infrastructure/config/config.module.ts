import { Global, Module } from '@nestjs/common';
import { ConfigModule as InnerConfig } from '@nestjs/config';
import { ConfigService } from './config.service';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Config } from './config.schema';

@Global()
@Module({
  imports: [
    InnerConfig.forRoot({
      validate: (conf) => validateSync(plainToInstance(Config, conf)),
      isGlobal: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
