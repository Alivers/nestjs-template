import { Global, Module } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '../infrastructure/config/config.service';

@Global()
@Module({
  providers: [AuthGuard],
  exports: [AuthGuard],
  imports: [
    JwtModule.registerAsync({
      useFactory: (conf: ConfigService) => {
        return {
          global: true,
          secret: conf.get('JWT_SECRET'),
          signOptions: {
            expiresIn: conf.get('JWT_EXPIRES_IN'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class CommonModule {}
