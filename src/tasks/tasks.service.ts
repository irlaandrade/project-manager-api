import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { ProjectsService } from 'src/projects/projects.service';


@Injectable()
export class TasksService {
  // constructor(
  //   @InjectRepository(Task)
  //   private readonly taskRepository: Repository<Task>,
  //   @InjectRepository(Project)
  //   private readonly projectRepository: Repository<Project>,
  // ) { }

  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
    private readonly projectsService: ProjectsService,
  ) {}

  // async create(createTaskDto: CreateTaskDto) {
  //   const project = await this.projectsRepository.findOneByOrFail({
  //     id: createTaskDto.projectId,
  //   });
  //   return this.tasksRepository.save({ ...createTaskDto, project });
  // }

  async create(createTaskDto: CreateTaskDto) {
    const project = await this.projectsService.findOneByOrFail(
      createTaskDto.projectId,
    );
    return this.tasksRepository.save({ ...createTaskDto, project });
  }

  findAll() {
    return this.tasksRepository.find();
  }

  findOne(id: number) {
    return this.tasksRepository.findOneBy({ id });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepository.update(id, updateTaskDto);
  }
  
  remove(id: number) {
    return this.tasksRepository.delete(id);
  }

}
