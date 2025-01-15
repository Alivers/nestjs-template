import { Injectable } from '@nestjs/common';
import { ConfigService as InnerConfig } from '@nestjs/config';
import { Config } from './config.schema';

@Injectable()
export class ConfigService {
  constructor(private config: InnerConfig<Config, true>) {}
  get<T extends keyof Config>(key: T) {
    return this.config.get(key, { infer: true });
  }
}
