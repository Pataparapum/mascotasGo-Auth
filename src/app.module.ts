import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { JwtService } from '@nestjs/jwt';
import { ApiUserModule } from './api-user/api-user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LoginModule,
    ApiUserModule,
    ConfigModule.forRoot({
      envFilePath: '../env/development.env',
      isGlobal: true
    })
  ],
  providers: [JwtService]
})
export class AppModule {}
