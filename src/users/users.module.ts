import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { Sms } from './typeorm/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports:[ TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"password",
    database:"sms1",
    synchronize:true,
    entities:entities,
  }),TypeOrmModule.forFeature([Sms]),],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
