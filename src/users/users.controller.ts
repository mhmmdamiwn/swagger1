import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CreateUsersDto } from './dto/api.dto';
import { Sms } from './typeorm/typeorm';
import { UsersService } from './users.service';
@ApiBearerAuth()
@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}
    @Get(":id")
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: Sms,
      })
    getAllSms(@Param("id",ParseIntPipe)  id:number){  
       return this.usersService.getAllSms(id);

    }
}
