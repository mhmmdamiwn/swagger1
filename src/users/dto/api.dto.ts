import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiProperty()
  start: number;
  @ApiProperty()
  end: number;
}