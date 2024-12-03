import { Injectable } from '@nestjs/common';
import { Todo } from './tasks.types';

const todoList: Record<number, Todo> = {};

@Injectable()
export class TasksService {
  // - GET /tasks - Retrieve all tasks
  // - POST /tasks - Create a new task
  // - PUT /tasks/:id - Update an existing task by ID
  // - DELETE /tasks/:id - Delete a task by ID

  private validation(todo: Todo) {
    if (!todo?.id) {
      throw 'Task should have a ID';
    }

    if (!todo?.title) {
      throw 'Task should have a Title';
    }

    if (todo?.completed === undefined) {
      throw 'Task should have a Status';
    }
  }

  getAll(): Record<number, Todo> {
    console.log(todoList);
    return todoList;
  }

  createOne(todo: Todo) {
    this.validation(todo);

    todoList[todo.id] = todo;
  }

  updateOne(id: number, todo: Todo) {
    this.validation(todo);

    todoList[id] = todo;
  }

  deleteOne(id: number) {
    delete todoList[id];
  }
}
