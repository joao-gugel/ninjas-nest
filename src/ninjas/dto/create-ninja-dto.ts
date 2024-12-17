import { IsEnum, MinLength } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'planets'], {
    message: 'weapon must be one of the following values: starts | planets',
  })
  weapon: 'stars' | 'planets';
}
