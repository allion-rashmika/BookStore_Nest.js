import { IsString } from 'class-validator';

export class CreateBook {
  @IsString()
  name: string;

  @IsString()
  author: string;
}
