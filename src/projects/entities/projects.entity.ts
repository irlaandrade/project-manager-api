import { ApiProperty } from '@nestjs/swagger';
import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Project {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ name: 'name', nullable: false })
  name: string;

  @ApiProperty()
  @Column({ name: 'description', nullable: false })
  description: string;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn()
  user: User;
}
