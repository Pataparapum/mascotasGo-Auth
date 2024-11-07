import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    LoginModule,
    ConfigModule.forRoot({
      envFilePath: '../env/development.env',
      isGlobal: true
    })
  ],
  providers: [JwtService]
})
export class AppModule {}
