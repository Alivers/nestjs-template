import { AuthGuard } from '@/common/auth/auth.guard';
import { SingleFlight } from '@/common/tools/singleflight';
import { ConfigService } from '@/infrastructure/config/config.service';
import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  providers: [AuthGuard, SingleFlight],
  exports: [AuthGuard, SingleFlight],
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
