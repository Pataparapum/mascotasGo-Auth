import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiUserService } from './api-user.service';

@Module({
    imports: [HttpModule],
    providers: [ApiUserService]
})
export class ApiUserModule {}
