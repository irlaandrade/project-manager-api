import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TaskStatus } from "../entities/task.entity";

export class CreateTaskDto {
  @IsNotEmpty({ message: 'O nome da tarefa não pode ser vazio' })
  @IsString({ message: 'O nome precisa ser string' })
  name: string;

  //@IsNotEmpty({ message: 'O status da tarefa não pode ser vazio' })
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsNotEmpty({ message: 'O projectId da tarefa não pode ser vazio' })
  @IsNumber()
  projectId: number;
}
