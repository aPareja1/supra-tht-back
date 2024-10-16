import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { AppConfigModule } from 'src/shared/modules/config/config.module';

@Module({
  imports: [HttpModule, AppConfigModule],
  providers: [
    AuthService,
    {
      provide: 'APP_INTERCEPTOR',
      useClass: AuthInterceptor,
    },
  ],
  exports: [],
})
export class AuthModule {}
