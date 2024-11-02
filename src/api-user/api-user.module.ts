import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiUserService } from './api-user.service';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [HttpModule],
    providers: [ApiUserService, ConfigService]
})
export class ApiUserModule {}
