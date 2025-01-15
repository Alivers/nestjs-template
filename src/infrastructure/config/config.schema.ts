import { IsInt, IsString } from 'class-validator';

export class Config {
  @IsInt()
  PORT: number;
  @IsString()
  JWT_SECRET: string;
  @IsInt()
  JWT_EXPIRES_IN: number;
}
