import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 'd932e2cf-42e7-4636-bb00-d8c40a0150f4',
      title: 'hello',
      description: 'world',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  createTask(newTask) {
    const task = {
      id: randomUUID(),
      ...newTask,
    };

    this.tasks.push(task);

    return task;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTask(id: string, input: Partial<Task>) {
    const task = this.tasks.findIndex((task) => task.id === id);
    if (task === -1) {
      return;
    }

    this.tasks[task] = {
      ...this.tasks[task],
      ...input,
    };

    return this.tasks[task];
  }
}
