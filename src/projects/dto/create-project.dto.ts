import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ description: 'Nome do projeto' })
  @IsNotEmpty({ message: 'O nome do projeto não pode ser vazio' })
  name: string;

  @ApiProperty({ description: 'Descrição do projeto' })
  @IsNotEmpty({ message: 'A descrição do projeto não pode ser vazia' })
  description: string;
}