import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  helloworld(): string {
    return '<h1>Hola</h1>';
  }
}
