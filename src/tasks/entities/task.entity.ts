import { Project } from "src/projects/entities/projects.entity";

export class Task {
  id: number;
  name: string;
  createdAt: string;
  status: TasksStatus;
  project: Project;
}

export enum TasksStatus {
  pending = 'pending',
  completed = 'completed',
}
