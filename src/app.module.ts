import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { JwtService } from '@nestjs/jwt';
import { ApiUserModule } from './api-user/api-user.module';

@Module({
  imports: [LoginModule, ApiUserModule],
  providers: [JwtService]
})
export class AppModule {}
