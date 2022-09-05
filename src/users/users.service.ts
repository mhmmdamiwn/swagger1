import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, Repository } from 'typeorm';
import { Sms } from './typeorm/typeorm';
import { Not, MoreThan, Equal } from "typeorm"

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Sms)private smsRepo:Repository<Sms>){}
    
    getAllSms(id:number){
        const allSms=this.smsRepo.find({
            where:{
                sms_id:MoreThan(id) && LessThan(3838)
            }
        });
        return allSms;
    }
}
