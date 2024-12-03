import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Todo } from './tasks.types';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // - GET /tasks - Retrieve all tasks
  // - POST /tasks - Create a new task
  // - PUT /tasks/:id - Update an existing task by ID
  // - DELETE /tasks/:id - Delete a task by ID

  @Get()
  getAll(): Record<number, Todo> {
    return this.tasksService.getAll();
  }

  @Post()
  createOne(@Body() body: Todo) {
    try {
      return this.tasksService.createOne(body);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Put(':id')
  updateOne(@Param() { id }: { id: number }, @Body() body: Todo) {
    try {
      return this.tasksService.updateOne(id, body);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  @Delete(':id')
  deleteOne(@Param() { id }: { id: number }) {
    return this.tasksService.deleteOne(id);
  }
}
