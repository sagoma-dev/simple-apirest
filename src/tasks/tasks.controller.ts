import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/task.dto';
import { validateTask, validatePartialTask } from './task.schema';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    const result = validateTask(newTask);
    if (!result.success) {
      return;
    }

    return this.tasksService.createTask(result.data);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateTask: Partial<Task>) {
    const result = validatePartialTask(updateTask);
    if (!result.success) {
      return;
    }
    return this.tasksService.updateTask(id, result.data);
  }
}
